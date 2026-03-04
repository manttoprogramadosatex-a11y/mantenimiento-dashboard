/* lib_pmc_sheet_bridge.js */
/* VERSION 2.0
   - Lee hoja "Bitácora"
   - Busca filas por texto (NO por índice)
   - Columna M = nombre
   - Columna N = valor
   - Extrae solo número antes de "h"
   - Devuelve enteros seguros
*/

const SatexPMCSheetBridge = {

    sheetId: "1DkFDe1cwp4hQjm4ip4Z8ZzEAPgiMY8e8qQMRMt2HHBU",
    sheetName: "Bitácora",

    obtenerDatos: async function () {

        const url = `https://docs.google.com/spreadsheets/d/${this.sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(this.sheetName)}`;
        const response = await fetch(url);
        const text = await response.text();

        const json = JSON.parse(text.substring(47).slice(0, -2));
        const rows = json.table.rows;

        // 🔹 Mes actual en texto
        const meses = [
            "Enero","Febrero","Marzo","Abril","Mayo","Junio",
            "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
        ];

        const mesActual = meses[new Date().getMonth()];

        // 🔎 Función para buscar fila por texto en columna M
        function buscarValor(nombreFila) {
            const fila = rows.find(r => r.c && r.c[12] && r.c[12].v === nombreFila);
            if (!fila) return 0;

            const valor = fila.c[13] ? fila.c[13].v : 0;

            if (typeof valor === "string" && valor.includes("h")) {
                return parseInt(valor.split("h")[0]) || 0;
            }

            return parseInt(valor) || 0;
        }

        const mensual = buscarValor(mesActual);
        const diario = buscarValor("Acumulado Hoy");
        const maxDiario = buscarValor("Meta Diaria");
        const maxMensual = buscarValor("Meta Mensual");

        return {
            diario: diario,
            maxDiario: maxDiario,
            mensual: mensual,
            maxMensual: maxMensual
        };
    }
};
