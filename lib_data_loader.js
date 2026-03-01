/* lib_data_loader.js */
const SHEET_ID = "1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok";

const SatexDataLoader = {
    async obtenerDatosCardas() {
        try {
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Informacion%20Cardas`;
            const respuesta = await fetch(url);
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const filas = json.table.rows;

            const resultado = [];
            // Regresamos a la fila 0 para no perder la estructura previa
            const r = filas[0].c; 

            for (let i = 3; i <= 12; i++) {
                resultado.push({
                    id: i - 2,
                    t: r[i]?.v || `CARDA ${i-2}`,
                    ac: 0, // Valores temporales para evitar errores de renderizado
                    max: 1000
                });
            }
            return resultado;
        } catch (error) {
            console.error("Error en DataLoader:", error);
            return null;
        }
    },

    async obtenerDatosPrincipales() {
        try {
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=0`;
            const res = await fetch(url);
            const txt = await res.text();
            const json = JSON.parse(txt.substring(txt.indexOf("{"), txt.lastIndexOf("}") + 1));
            const f = json.table.rows[0].c;
            return {
                fecha: f[0]?.f || "",
                continuas: f[1]?.v || 0,
                openEnd: f[2]?.v || 0,
                coneras: f[3]?.v || 0
            };
        } catch (e) { return null; }
    },

    async obtenerMaquinasParadas() {
        try {
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Maquinas%20Paradas`;
            const res = await fetch(url);
            const txt = await res.text();
            const json = JSON.parse(txt.substring(txt.indexOf("{"), txt.lastIndexOf("}") + 1));
            return json.table.rows.map(f => ({
                desde: f.c[0]?.f || "",
                tipo: f.c[1]?.v || "",
                num: f.c[2]?.v || ""
            })).filter(m => m.num !== "");
        } catch (e) { return []; }
    }
};
