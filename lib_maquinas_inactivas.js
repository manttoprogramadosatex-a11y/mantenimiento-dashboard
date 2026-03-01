/* lib_maquinas_inactivas.js */
/* VERSION 2.1.0
   - Conexión directa a Google Sheets
   - Pestaña: Maquinas Paradas (gid=217931005)
   - Columnas: A=DESDE | B=TIPO | C=NUM
   - Ignora fila 1 (títulos)
   - Calcula días automáticamente
   - No modifica diseño visual
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

            // Extrae JSON sin wrapper
            const json = JSON.parse(
                text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1)
            );

            const rows = json.table.rows;

            // Si no hay datos
            if (!rows || rows.length <= 1) {
                container.innerHTML = `
                    <div style="color: #666; text-align: center; padding: 5px; font-size: 14px;">
                        Sin máquinas paradas
                    </div>`;
                return;
            }

            // Ignora encabezado (fila 1)
            const data = rows.slice(1);

            // Función para calcular días
            const calcularDias = (fechaDesde) => {

                if (!fechaDesde) return 0;

                const inicio = new Date(fechaDesde);
                if (isNaN(inicio)) return 0;

                const hoy = new Date();
                inicio.setHours(0,0,0,0);
                hoy.setHours(0,0,0,0);

                const diferenciaMs = hoy - inicio;
                const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

                return dias < 0 ? 0 : dias;
            };

            // Construir HTML
            let html = "";

            data.forEach(row => {

                // Validar existencia
                if (!row.c[0] || !row.c[1] || !row.c[2]) return;

                const fechaDesde = row.c[0].v;
                const tipo       = row.c[1].v;
                const numero     = row.c[2].v;

                const diasCalculados = calcularDias(fechaDesde);

                html += `
                <div style="display: flex;
                            border-bottom: 1px solid rgba(255,68,68,0.2);
                            color: white;
                            font-size: 13px;
                            padding: 4px 0;
                            font-family: 'Segoe UI', sans-serif;
                            align-items: center;">
                    
                    <div style="width: 35%; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        ${tipo}
                    </div>

                    <div style="width: 15%; text-align: center; font-weight: bold; color: #ff4444;">
                        ${String(numero).padStart(2, '0')}
                    </div>

                    <div style="width: 30%; text-align: center;">
                        ${new Date(fechaDesde).toISOString().split("T")[0]}
                    </div>

                    <div style="width: 20%; text-align: center; font-weight: bold;">
                        ${diasCalculados}
                    </div>

                </div>`;
            });

            // Pintar en pantalla
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
