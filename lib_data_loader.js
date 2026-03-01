/* lib_data_loader.js */
/* VERSION 4.5
   - Ajuste final de índices basado en estructura real de la captura
   - Fila 5 (Nombres) -> filas[1]
   - Fila 6 (Toneladas Act.) -> filas[2]
   - Fila 7 (Toneladas Max.) -> filas[3]
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

            // Ajuste según interpretación de Google Sheets de tu captura:
            const titulos  = filas[1].c; // Corresponde a Fila 5 del Excel (Carda X)
            const actuales = filas[2].c; // Corresponde a Fila 6 del Excel (794, 1016...)
            const maximos  = filas[3].c; // Corresponde a Fila 7 del Excel (1100, 950...)

            const resultado = [];
            // Columnas D(3) a M(12) para las 10 cardas
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
