/* lib_espera_llegada_bridge.js */
/* VERSION 1.0
   - Lee Google Sheet de Requisiciones en espera (CSV)
   - Obtiene valor máximo de columna A
   - Abre el libro al hacer click
*/

const SatexEsperaLlegadaBridge = {

    // URL de exportación CSV para el nuevo documento
    sheetCSV: "https://docs.google.com/spreadsheets/d/19utwFW7AM4QNU8dLSOKvcA7xJv-a2coo0GHpXBCpYfk/export?format=csv&gid=0",

    // URL para abrir el editor
    sheetURL: "https://docs.google.com/spreadsheets/d/19utwFW7AM4QNU8dLSOKvcA7xJv-a2coo0GHpXBCpYfk/edit?gid=0",

    async obtenerMaxColumnaA() {
        try {
            const response = await fetch(this.sheetCSV);
            const text = await response.text();

            const filas = text.split("\n");

            const valores = filas
                .map(f => f.split(",")[0]) // Columna A
                .map(v => parseFloat(v))
                .filter(v => !isNaN(v));

            if (valores.length === 0) return 0;

            return Math.max(...valores);

        } catch (error) {
            console.error("Error Sheet Espera Llegada:", error);
            return 0;
        }
    },

    abrirSheet() {
        window.open(this.sheetURL, "_blank");
    }
};
