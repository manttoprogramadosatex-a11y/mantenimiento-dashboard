/* lib_cardas_engine.js */
/* VERSION 3.1.0
   - NO borra layout
   - Solo actualiza tarjetas internas
   - Conectado a Google Sheets
*/

const SatexCardasEngine = {

    SHEET_ID: "1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok",
    GID: "1547200035",

    async cargarDatos() {

        const url =
            `https://docs.google.com/spreadsheets/d/${this.SHEET_ID}/gviz/tq?gid=${this.GID}&tqx=out:json`;

        const response = await fetch(url, { cache: "no-store" });
        const text = await response.text();

        const json = JSON.parse(
            text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1)
        );

        const rows = json.table.rows;

        if (!rows || rows.length < 7) return [];

        const filaAC  = rows[5].c;
        const filaMAX = rows[6].c;

        const cardas = [];

        for (let i = 3; i <= 13; i++) {

            const ac  = filaAC[i]  ? filaAC[i].v  : 0;
            const max = filaMAX[i] ? filaMAX[i].v : 0;

            cardas.push({
                id: i - 2,
                nombre: `CARDA ${i - 2}`,
                ac: ac,
                max: max
            });
        }

        return cardas;
    },

    async render(contenedorId) {

        const container = document.getElementById(contenedorId);
        if (!container) return;

        const datos = await this.cargarDatos();
        if (!datos.length) return;

        // 🔥 SOLO buscamos o creamos un sub-contenedor interno
        let grid = container.querySelector(".cardas-grid");

        if (!grid) {
            grid = document.createElement("div");
            grid.className = "cardas-grid";
            container.appendChild(grid);
        }

        // 🔥 Solo limpiamos el grid interno
        grid.innerHTML = "";

        datos.forEach(carda => {

            const porcentaje = carda.max > 0
                ? (carda.ac / carda.max) * 100
                : 0;

            let color = "#2ecc71";
            if (porcentaje >= 90) color = "#e74c3c";
            else if (porcentaje >= 70) color = "#f39c12";

            const tarjeta = document.createElement("div");
            tarjeta.className = "carda-box";

            tarjeta.innerHTML = `
                <div class="carda-titulo">${carda.nombre}</div>
                <canvas id="gauge-${carda.id}" width="160" height="100"></canvas>
                <div class="carda-datos">
                    <div>Ac. ${carda.ac}</div>
                    <div>Max. ${carda.max}</div>
                </div>
            `;

            grid.appendChild(tarjeta);

            setTimeout(() => {
                this.dibujarGauge(
                    `gauge-${carda.id}`,
                    carda.ac,
                    carda.max,
                    color
                );
            }, 10);
        });
    },

    dibujarGauge(canvasId, valor, maximo, color) {

        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        const porcentaje = maximo > 0 ? valor / maximo : 0;
        const angulo = Math.PI * porcentaje;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.lineWidth = 12;
        ctx.strokeStyle = "#ddd";
        ctx.arc(80, 90, 60, Math.PI, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.arc(80, 90, 60, Math.PI, Math.PI + angulo);
        ctx.stroke();
    }
};
