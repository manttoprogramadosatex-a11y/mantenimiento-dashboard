/* lib_personal_negativos_bridge.js */
/* VERSION 1.0
   - Lee Google Sheet de Registros Negativos (CSV)
   - Obtiene valor máximo de la columna A
   - Abre el libro al hacer click
*/

const SatexPersonalNegativosBridge = {

    // URL de exportación CSV para el documento de Registros Negativos
    sheetCSV: "https://docs.google.com/spreadsheets/d/1Ww7yYIgWUeAWM4eZ8fqwEGDmMQ6CVZd6nFQ6B_skqsc/export?format=csv&gid=0",

    // URL para abrir el editor
    sheetURL: "https://docs.google.com/spreadsheets/d/1Ww7yYIgWUeAWM4eZ8fqwEGDmMQ6CVZd6nFQ6B_skqsc/edit?usp=sharing",

    async obtenerMaxColumnaA() {
        try {
            const response = await fetch(this.sheetCSV);
            const text = await response.text();

            const filas = text.split("\n");

            // Extrae valores de la Columna A, omitiendo el encabezado
            const valores = filas
                .slice(1) 
                .map(f => f.split(",")[0])
                .map(v => parseFloat(v))
                .filter(v => !isNaN(v));

            if (valores.length === 0) return 0;

            return Math.max(...valores);

        } catch (error) {
            console.error("Error Sheet Registros Negativos:", error);
            return 0;
        }
    },

    abrirSheet() {
        window.open(this.sheetURL, "_blank");
    }
};
