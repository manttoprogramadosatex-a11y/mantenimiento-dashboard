/* lib_personal_faltas_bridge.js */
/* VERSION 1.0
   - Lee Google Sheet de Faltas (CSV)
   - Obtiene valor máximo de la columna A (Item)
   - Abre el libro al hacer click
*/

const SatexPersonalFaltasBridge = {

    // URL de exportación CSV para el documento de Faltas
    sheetCSV: "https://docs.google.com/spreadsheets/d/1DdMqiKcsa_WILh3JX8LUBnn00-Oq3NprpQ0uDIYvnJ4/export?format=csv&gid=0",

    // URL para abrir el editor
    sheetURL: "https://docs.google.com/spreadsheets/d/1DdMqiKcsa_WILh3JX8LUBnn00-Oq3NprpQ0uDIYvnJ4/edit?usp=sharing",

    async obtenerMaxColumnaA() {
        try {
            const response = await fetch(this.sheetCSV);
            const text = await response.text();

            const filas = text.split("\n");

            // Extrae valores de la Columna A (Item), omitiendo el encabezado
            const valores = filas
                .slice(1) 
                .map(f => f.split(",")[0])
                .map(v => parseFloat(v))
                .filter(v => !isNaN(v));

            if (valores.length === 0) return 0;

            return Math.max(...valores);

        } catch (error) {
            console.error("Error Sheet Faltas:", error);
            return 0;
        }
    },

    abrirSheet() {
        window.open(this.sheetURL, "_blank");
    }
};
