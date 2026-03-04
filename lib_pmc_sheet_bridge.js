/* lib_pmc_sheet_bridge.js */
/* VERSION 1.0
   - Lee hoja "Bitácora"
   - Obtiene:
        N3:N14  → Meses
        N16     → Horas día
        N17     → Max H Día
        N18     → Max H Mes
   - Toma solo número antes de "h"
   - Devuelve enteros
   - No modifica ninguna librería existente
*/

const SatexPMCSheetBridge = {

    sheetId: "1DkFDe1cwp4hQjm4ip4Z8ZzEAPgiMY8e8qQMRMt2HHBU",
    sheetName: "Bitácora",

    obtenerDatos: async function () {

        const url = `https://docs.google.com/spreadsheets/d/${this.sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(this.sheetName)}`;
        const response = await fetch(url);
        const text = await response.text();

        // Limpieza formato gviz
        const json = JSON.parse(text.substring(47).slice(0, -2));
        const rows = json.table.rows;

        // 🔹 Detectar mes actual
        const mesIndex = new Date().getMonth(); // 0-11
        const filaMes = 2 + mesIndex; 
        // N3 es índice 2 (base 0)
        // Enero = rows[2]
        // Febrero = rows[3]
        // Marzo = rows[4]

        // 🔹 Extraer valor mensual
        const valorMesRaw = rows[filaMes]?.c[13]?.v || "0h";
        const mensual = parseInt(valorMesRaw.split("h")[0]) || 0;

        // 🔹 Diario N16 → índice 15
        const diarioRaw = rows[15]?.c[13]?.v || "0h";
        const diario = parseInt(diarioRaw.split("h")[0]) || 0;

        // 🔹 Max Diario N17 → índice 16
        const maxDiario = parseInt(rows[16]?.c[13]?.v) || 0;

        // 🔹 Max Mensual N18 → índice 17
        const maxMensual = parseInt(rows[17]?.c[13]?.v) || 0;

        return {
            diario: diario,
            maxDiario: maxDiario,
            mensual: mensual,
            maxMensual: maxMensual
        };
    }
};
