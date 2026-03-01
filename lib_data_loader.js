/* lib_data_loader.js */
/* VERSION 4.3 
   - Re-ajuste de índices para Cardas (Fila 5, 6, 7)
   - Validación de existencia de datos antes de mapear
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
            // URL con el nombre exacto de la pestaña: Informacion Cardas
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Informacion%20Cardas&t=${timestamp}`;
            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const filas = json.table.rows;

            // Verificamos que existan al menos las filas necesarias (hasta la 7 = índice 6)
            if (!filas || filas.length < 7) {
                console.error("No se encontraron suficientes filas en Informacion Cardas");
                return null;
            }

            const titulos  = filas[4].c; // Fila 5
            const actuales = filas[5].c; // Fila 6
            const maximos  = filas[6].c; // Fila 7

            const resultado = [];
            // Columnas D(3) a N(13) para las 11 cardas
            for (let i = 3; i <= 13; i++) {
                const nombre = titulos[i]?.v || `CARDA ${i-2}`;
                const valorAc = actuales[i]?.v || 0;
                const valorMax = maximos[i]?.v || 1000;

                resultado.push({
                    id: i - 2,
                    t: nombre,
                    ac: Number(valorAc),
                    max: Number(valorMax)
                });
            }
            return resultado;
        } catch (error) {
            console.error("Error cargando Cardas:", error);
            return null;
        }
    }
};
