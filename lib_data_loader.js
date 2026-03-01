/* lib_data_loader.js */
/* VERSION 4.1 
   - Mantiene Husos (gid=0) y Máquinas Paradas
   - NUEVO: Carga de Cardas (pestaña: "Informacion Cardas")
   - Extrae: D5:N5 (Títulos), D6:N6 (Actual), D7:N7 (Máximo)
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
            return filas.map(f => {
                const c = f.c;
                return {
                    desde: c[0]?.f || c[0]?.v || "",
                    tipo:  c[1]?.v || "",
                    num:   c[2]?.v || ""
                };
            }).filter(m => m.tipo !== "" && m.num !== "");
        } catch (error) {
            console.error("Error cargando Maquinas Paradas:", error);
            return [];
        }
    },

    // NUEVA FUNCIÓN PARA CARDAS
    async obtenerDatosCardas() {
        try {
            const timestamp = new Date().getTime();
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Informacion%20Cardas&t=${timestamp}`;
            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const filas = json.table.rows;

            // Fila 4=D5:N5, Fila 5=D6:N6, Fila 6=D7:N7
            const titulos = filas[4].c;
            const actuales = filas[5].c;
            const maximos = filas[6].c;

            const resultado = [];
            // Columnas D a N (índice 3 a 13)
            for (let i = 3; i <= 13; i++) {
                resultado.push({
                    id: i - 2,
                    t: titulos[i]?.v || `CARDA ${i-2}`,
                    ac: actuales[i]?.v || 0,
                    max: maximos[i]?.v || 1000
                });
            }
            return resultado;
        } catch (error) {
            console.error("Error cargando datos de Cardas:", error);
            return null;
        }
    }
};
