/* lib_maquinas_inactivas.js */
/* VERSION 2.3.0
   - Corrige inicio desde fila 2 real
   - Compatible con Date(YYYY,MM,DD)
   - Pestaña Maquinas Paradas gid=217931005
   - No modifica diseño
*/

const SatexMaquinasInactivas = {

    SHEET_ID: "1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok",
    GID: "217931005",

    async render(id) {

        const container = document.getElementById(id);
        if (!container) return;

        try {

            const url =
                `https://docs.google.com/spreadsheets/d/${this.SHEET_ID}/gviz/tq?gid=${this.GID}&tqx=out:json`;

            const response = await fetch(url, { cache: "no-store" });
            const text = await response.text();

            const json = JSON.parse(
                text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1)
            );

            const rows = json.table.rows;

            if (!rows || rows.length === 0) {
                container.innerHTML = `
                    <div style="color: #666; text-align: center; padding: 5px; font-size: 14px;">
                        Sin máquinas paradas
                    </div>`;
                return;
            }

            // 🔥 YA NO hacemos slice(1)
            const data = rows;

            const parseGoogleDate = (value) => {

                if (!value) return null;

                if (typeof value === "string" && value.startsWith("Date(")) {

                    const partes = value
                        .replace("Date(", "")
                        .replace(")", "")
                        .split(",");

                    const year  = parseInt(partes[0]);
                    const month = parseInt(partes[1]);
                    const day   = parseInt(partes[2]);

                    return new Date(year, month, day);
                }

                return new Date(value);
            };

            const calcularDias = (fecha) => {

                if (!fecha) return 0;

                const inicio = new Date(fecha);
                const hoy = new Date();

                inicio.setHours(0,0,0,0);
                hoy.setHours(0,0,0,0);

                const diferenciaMs = hoy - inicio;
                const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

                return dias < 0 ? 0 : dias;
            };

            let html = "";

            data.forEach(row => {

                if (!row.c[0] || !row.c[1] || !row.c[2]) return;

                const fechaObj = parseGoogleDate(row.c[0].v);
                if (!fechaObj) return;

                const tipo   = row.c[1].v;
                const numero = row.c[2].v;

                const diasCalculados = calcularDias(fechaObj);
                const fechaFormateada =
                    fechaObj.toISOString().split("T")[0];

                html += `
                <div style="display: flex;
                            border-bottom: 1px solid rgba(255,68,68,0.2);
                            color: white;
                            font-size: 13px;
                            padding: 4px 0;
                            font-family: 'Segoe UI', sans-serif;
                            align-items: center;">
                    
                    <div style="width: 35%; text-align: center;">
                        ${tipo}
                    </div>

                    <div style="width: 15%; text-align: center; font-weight: bold; color: #ff4444;">
                        ${String(numero).padStart(2, '0')}
                    </div>

                    <div style="width: 30%; text-align: center;">
                        ${fechaFormateada}
                    </div>

                    <div style="width: 20%; text-align: center; font-weight: bold;">
                        ${diasCalculados}
                    </div>

                </div>`;
            });

            container.innerHTML = html;

        } catch (error) {

            console.error("Error cargando maquinas paradas:", error);

            container.innerHTML = `
                <div style="color: #ff4444; text-align: center; padding: 5px; font-size: 14px;">
                    Error cargando datos
                </div>`;
        }
    }
};
