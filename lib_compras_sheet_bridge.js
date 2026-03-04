/* lib_compras_sheet_bridge.js */
/* VERSION 1.0
   - Lee Google Sheet público (CSV)
   - Obtiene valor máximo de columna A
   - Abre el libro al hacer click
   - No altera layout
*/

const SatexComprasSheetBridge = {

    sheetCSV: "https://docs.google.com/spreadsheets/d/1R_KbwiBbT--EY6QHnA7xCexIHbVo6mKsXk32Ectwzf8/export?format=csv&gid=0",

    sheetURL: "https://docs.google.com/spreadsheets/d/1R_KbwiBbT--EY6QHnA7xCexIHbVo6mKsXk32Ectwzf8/edit?gid=0",

    async obtenerMaxColumnaA() {

        try {
            const response = await fetch(this.sheetCSV);
            const text = await response.text();

            const filas = text.split("\n");

            const valores = filas
                .map(f => f.split(",")[0])
                .map(v => parseFloat(v))
                .filter(v => !isNaN(v));

            if (valores.length === 0) return 0;

            return Math.max(...valores);

        } catch (error) {
            console.error("Error Sheet Compras:", error);
            return 0;
        }
    },

    abrirSheet() {
        window.open(this.sheetURL, "_blank");
    }
};
