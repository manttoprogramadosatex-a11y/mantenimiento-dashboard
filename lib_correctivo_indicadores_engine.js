/* lib_correctivo_indicadores_engine.js */
/* VERSION 1.0
   - Calcula OS ABIERTAS desde pestaña "Bitácora" (Columna E = "PENDIENTE")
   - Obtiene MTTR.H. desde "Datos_MTTO" celda K1
   - Obtiene MTBF.D. desde "Datos_MTTO" celda M1
   - No modifica diseño
   - No borra código existente
   - Solo sobrescribe render correctivo con datos reales
*/

const SatexCorrectivoIndicadoresEngine = {

    SHEET_ID: "1DkFDe1cwp4hQjm4ip4Z8ZzEAPgiMY8e8qQMRMt2HHBU",

    async init() {
        try {
            const osAbiertas = await this.obtenerOSAbiertas();
            const { mttr, mtbf } = await this.obtenerMTTRyMTBF();

            // 🔥 Re-render dinámico
            SatexCorrectivoKPIDesign.render(
                "kpis-correctivo-container",
                mtbf,
                mttr,
                osAbiertas
            );

        } catch (error) {
            console.error("Error en indicadores correctivos:", error);
        }
    },

    async obtenerOSAbiertas() {
        const url = `https://docs.google.com/spreadsheets/d/${this.SHEET_ID}/gviz/tq?tqx=out:json&sheet=Bitácora`;
        const response = await fetch(url);
        const text = await response.text();

        const json = JSON.parse(text.substring(47).slice(0, -2));
        const rows = json.table.rows;

        let contador = 0;

        rows.forEach(row => {
            const celda = row.c[4]; // Columna E = índice 4
            if (celda && celda.v) {
                if (celda.v.toString().trim().toUpperCase() === "PENDIENTE") {
                    contador++;
                }
            }
        });

        return contador;
    },

    async obtenerMTTRyMTBF() {
        const url = `https://docs.google.com/spreadsheets/d/${this.SHEET_ID}/gviz/tq?tqx=out:json&sheet=Datos_MTTO`;
        const response = await fetch(url);
        const text = await response.text();

        const json = JSON.parse(text.substring(47).slice(0, -2));
        const rows = json.table.rows;

        let mttr = 0;
        let mtbf = 0;

        if (rows.length > 0) {
            const fila1 = rows[0];

            if (fila1.c[10] && fila1.c[10].v) { // K1 = índice 10
                mttr = Number(fila1.c[10].v) || 0;
            }

            if (fila1.c[12] && fila1.c[12].v) { // M1 = índice 12
                mtbf = Number(fila1.c[12].v) || 0;
            }
        }

        return { mttr, mtbf };
    }
};
