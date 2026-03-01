/* lib_data_loader.js */
/* VERSION 5.0 - Mapeo Manual con Debug */

const SHEET_ID = "1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok";

const SatexDataLoader = {
    async obtenerDatosCardas() {
        try {
            // El parámetro 'nocache' obliga a Google a darnos datos frescos
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Informacion%20Cardas&nocache=${new Date().getTime()}`;
            const respuesta = await fetch(url);
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const filas = json.table.rows;

            console.log("--- DEBUG DATOS RECIBIDOS ---");
            // ESTO MOSTRARÁ EN TU CONSOLA (F12) QUÉ HAY EN CADA FILA
            filas.forEach((f, i) => console.log(`Fila JS [${i}] (Excel ${i+1}):`, f.c[3]?.v));

            // Si "Carda 1" está en la Celda D5 del Excel, en JS es filas[4]
            // Si "794" está en la Celda D6 del Excel, en JS es filas[5]
            // Si "1100" está en la Celda D7 del Excel, en JS es filas[6]
            
            const rNom = filas[4].c; 
            const rAct = filas[5].c; 
            const rMax = filas[6].c; 

            const resultado = [];
            // Columnas D a M (índices 3 a 12)
            for (let i = 3; i <= 12; i++) {
                resultado.push({
                    id: i - 2,
                    t: rNom[i]?.v || `CARDA ${i-2}`,
                    ac: parseFloat(rAct[i]?.v) || 0,
                    max: parseFloat(rMax[i]?.v) || 1000
                });
            }
            return resultado;
        } catch (error) {
            console.error("Error en DataLoader:", error);
            return null;
        }
    },

    // Métodos de apoyo
    async obtenerDatosPrincipales() {
        try {
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=0&v=${new Date().getTime()}`;
            const res = await fetch(url);
            const txt = await res.text();
            const json = JSON.parse(txt.substring(txt.indexOf("{"), txt.lastIndexOf("}") + 1));
            const f = json.table.rows[0].c;
            return { fecha: f[0]?.f || "", continuas: f[1]?.v || 0, openEnd: f[2]?.v || 0, coneras: f[3]?.v || 0 };
        } catch (e) { return null; }
    },

    async obtenerMaquinasParadas() {
        try {
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Maquinas%20Paradas&v=${new Date().getTime()}`;
            const res = await fetch(url);
            const txt = await res.text();
            const json = JSON.parse(txt.substring(txt.indexOf("{"), txt.lastIndexOf("}") + 1));
            return json.table.rows.map(f => ({ desde: f.c[0]?.f || "", tipo: f.c[1]?.v || "", num: f.c[2]?.v || "" })).filter(m => m.num !== "");
        } catch (e) { return []; }
    }
};
