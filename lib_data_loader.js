/* lib_data_loader.js */
/* VERSION 4.4 
   - Ajuste de índices de filas para eliminar desfase
   - Fila 5 (Nombres) -> Índice 3
   - Fila 6 (Toneladas Act.) -> Índice 4
   - Fila 7 (Toneladas Max.) -> Índice 5
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
        } catch (e) { return null; }
    },

    async obtenerMaquinasParadas() {
        try {
            const timestamp = new Date().getTime();
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Maquinas%20Paradas&t=${timestamp}`;
            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const filas = json.table.rows;
            if (!filas) return [];
            return filas.map(f => ({
                desde: f.c[0]?.f || f.c[0]?.v || "",
                tipo:  f.c[1]?.v || "",
                num:   f.c[2]?.v || ""
            })).filter(m => m.tipo !== "" && m.num !== "");
        } catch (e) { return []; }
    },

    async obtenerDatosCardas() {
        try {
            const timestamp = new Date().getTime();
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Informacion%20Cardas&t=${timestamp}`;
            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const filas = json.table.rows;

            // Ajuste de desfase: 
            // Según la estructura de la captura, los índices correctos son:
            const titulos  = filas[3].c; // Corresponde a Fila 5 del Excel
            const actuales = filas[4].c; // Corresponde a Fila 6 del Excel
            const maximos  = filas[5].c; // Corresponde a Fila 7 del Excel

            const resultado = [];
            // Columnas D(3) a M(12) para las 10 cardas visibles en tu captura
            for (let i = 3; i <= 12; i++) {
                resultado.push({
                    id: i - 2,
                    t: titulos[i]?.v || `CARDA ${i-2}`,
                    ac: actuales[i]?.v || 0,
                    max: maximos[i]?.v || 1000
                });
            }
            return resultado;
        } catch (error) {
            console.error("Error en Cardas:", error);
            return null;
        }
    }
};
