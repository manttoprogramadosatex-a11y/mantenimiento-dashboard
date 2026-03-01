/* lib_data_loader.js */
/* VERSION 5.0
   - Husos y Máquinas Paradas
   - Lectura dinámica de Cardas (Pestaña Info Cardas)
   - Rango: D5:N7 (Acumulados y Máximos)
*/

const SHEET_ID = "1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok";

const SatexDataLoader = {

    async obtenerDatosPrincipales() {
        try {
            const timestamp = new Date().getTime();
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=0&t=${timestamp}`;
            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const filas = json.table.rows;
            if (!filas || filas.length === 0) return { fecha: "", continuas: 0, openEnd: 0, coneras: 0 };
            const fila = filas[0].c;
            return {
                fecha: fila[0]?.f || "",
                continuas: fila[1]?.v || 0,
                openEnd: fila[2]?.v || 0,
                coneras: fila[3]?.v || 0
            };
        } catch (error) {
            console.error("Error cargando datos principales:", error);
            return { fecha: "", continuas: 0, openEnd: 0, coneras: 0 };
        }
    },

    async obtenerMaquinasParadas() {
        try {
            const timestamp = new Date().getTime();
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Maquinas%20Paradas&t=${timestamp}`;
            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const filas = json.table.rows;
            if (!filas || filas.length === 0) return [];
            return filas.map(f => ({
                desde: f.c[0]?.f || f.c[0]?.v || "",
                tipo:  f.c[1]?.v || "",
                num:   f.c[2]?.v || ""
            })).filter(m => m.tipo !== "" && m.num !== "");
        } catch (error) {
            console.error("Error cargando Maquinas Paradas:", error);
            return [];
        }
    },

    // NUEVA FUNCIÓN PARA CARDAS
    async obtenerDatosCardas() {
        try {
            const timestamp = new Date().getTime();
            // GID 1547200035 corresponde a "Info Cardas"
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=1547200035&t=${timestamp}`;
            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            
            const filas = json.table.rows;
            // Fila 4 (index 4) -> Nombres (D5:N5)
            // Fila 5 (index 5) -> Acumulados (D6:N6)
            // Fila 6 (index 6) -> Máximos (D7:N7)
            // Las columnas D a N en la API comienzan desde el índice 3
            
            let cardasData = [];
            for (let i = 3; i <= 13; i++) { // Columnas D(3) a N(13)
                cardasData.push({
                    id: i - 2,
                    t:  filas[4]?.c[i]?.v || `CARDA ${i-2}`,
                    ac: filas[5]?.c[i]?.v || 0,
                    max: filas[6]?.c[i]?.v || 1000
                });
            }
            return cardasData;
        } catch (error) {
            console.error("Error cargando datos de Cardas:", error);
            return [];
        }
    }
};
