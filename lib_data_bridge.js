/* lib_data_bridge.js */
/* VERSION 1.0
   - Lee cumplimiento preventivo desde Google Sheets
   - Convierte porcentaje a número entero
   - No altera layout
   - Funciona como puente de datos
*/

const SatexDataBridge = {

    async obtenerCumplimientoPreventivo() {
        try {
            const sheetId = "16gfm9ZgivtCcpuRKpZQVuxfMcT2_fjpll5w8insJ3jg";
            const gid = 0;
            const rango = "H1";

            const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?gid=${gid}&range=${rango}&tqx=out:json`;

            const response = await fetch(url);
            const text = await response.text();

            const json = JSON.parse(
                text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1)
            );

            const valorDecimal = json.table.rows[0]?.c[0]?.v;

            if (valorDecimal === undefined || valorDecimal === null) return 0;

            // Google devuelve porcentaje como decimal (ej: 0.2308)
            const porcentaje = Math.round(parseFloat(valorDecimal) * 100);

            return porcentaje;

        } catch (error) {
            console.error("Error obteniendo cumplimiento preventivo:", error);
            return 0;
        }
    }

};
