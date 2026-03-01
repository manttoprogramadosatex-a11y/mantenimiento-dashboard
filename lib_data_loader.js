/* lib_data_loader.js */
/* VERSION 4.8
   - Mapeo Manual Estricto:
   - Fila 5 (Carda X) -> filas[4]
   - Fila 6 (794, 1016...) -> filas[5]
   - Fila 7 (1100, 1100...) -> filas[6]
*/

const SHEET_ID = "1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok";

const SatexDataLoader = {
    // ... (obtenerDatosPrincipales y obtenerMaquinasParadas se mantienen igual)

    async obtenerDatosCardas() {
        try {
            const timestamp = new Date().getTime();
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Informacion%20Cardas&t=${timestamp}`;
            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const filas = json.table.rows;

            // VALIDACIÓN DE FILAS SEGÚN EXCEL
            // fila[4] -> Excel Row 5 (Nombre)
            // fila[5] -> Excel Row 6 (Toneladas Actuales - Amarillo)
            // fila[6] -> Excel Row 7 (Toneladas Max Vida - Blanco)
            
            const rowNombres = filas[4].c; 
            const rowActual  = filas[5].c; 
            const rowMaximo  = filas[6].c; 

            const resultado = [];
            // Columnas D a M (Índices 3 a 12)
            for (let i = 3; i <= 12; i++) {
                resultado.push({
                    id: i - 2,
                    t: rowNombres[i]?.v || `CARDA ${i-2}`,
                    ac: rowActual[i]?.v || 0,
                    max: rowMaximo[i]?.v || 1000
                });
            }
            return resultado;
        } catch (error) {
            console.error("Error crítico en mapeo de Cardas:", error);
            return null;
        }
    },

    // Mantener los otros métodos...
    async obtenerDatosPrincipales() {
        try {
            const timestamp = new Date().getTime();
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=0&t=${timestamp}`;
            const respuesta = await fetch(url);
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const fila = json.table.rows[0].c;
            return { fecha: fila[0]?.f || "", continuas: fila[1]?.v || 0, openEnd: fila[2]?.v || 0, coneras: fila[3]?.v || 0 };
        } catch (e) { return null; }
    },

    async obtenerMaquinasParadas() {
        try {
            const timestamp = new Date().getTime();
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Maquinas%20Paradas&t=${timestamp}`;
            const respuesta = await fetch(url);
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            return json.table.rows.map(f => ({ desde: f.c[0]?.f || "", tipo: f.c[1]?.v || "", num: f.c[2]?.v || "" })).filter(m => m.num !== "");
        } catch (e) { return []; }
    }
};
