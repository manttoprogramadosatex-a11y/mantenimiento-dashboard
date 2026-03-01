/* lib_data_loader.js */
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
            console.error("Error datos principales:", error);
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
            if (!filas) return [];
            return filas.map(f => ({
                desde: f.c[0]?.f || f.c[0]?.v || "",
                tipo:  f.c[1]?.v || "",
                num:   f.c[2]?.v || ""
            })).filter(m => m.tipo !== "" && m.num !== "");
        } catch (error) {
            return [];
        }
    },

    async obtenerDatosCardas() {
        try {
            const timestamp = new Date().getTime();
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=1547200035&t=${timestamp}`;
            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const filas = json.table.rows;
            
            let cardasData = [];
            // De Columna D (3) a M (12) según tu Excel
            for (let i = 3; i <= 12; i++) { 
                cardasData.push({
                    id: i - 2,
                    t:  filas[4]?.c[i]?.v || `Carda ${i-2}`, // Fila 5
                    ac: parseFloat(filas[5]?.c[i]?.v || 0),   // Fila 6
                    max: parseFloat(filas[6]?.c[i]?.v || 0)   // Fila 7
                });
            }
            return cardasData;
        } catch (error) {
            console.error("Error en obtenerDatosCardas:", error);
            return [];
        }
    }
};
