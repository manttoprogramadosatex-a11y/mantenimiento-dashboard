/* lib_data_loader.js */
/* VERSION 4.6
   - Ajuste de índices: Desplazamiento +2 filas hacia abajo
   - Fila 5 (Nombres) -> filas[3]
   - Fila 6 (Toneladas Act.) -> filas[4]
   - Fila 7 (Toneladas Max.) -> filas[5]
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

            // Ajuste de puntería basado en tu reporte de desfase (+2 filas):
            const titulos  = filas[3].c; // Antes filas[1]
            const actuales = filas[4].c; // Antes filas[2]
            const maximos  = filas[5].c; // Antes filas[3]

            const resultado = [];
            // Columnas D(3) a N(13)
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
            console.error("Error en Cardas:", error);
            return null;
        }
    }
};
