/* lib_data_loader.js - VERSIÓN CORREGIDA POR DESFASE */
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
            return filas ? filas.map(f => ({
                desde: f.c[0]?.f || f.c[0]?.v || "",
                tipo:  f.c[1]?.v || "",
                num:   f.c[2]?.v || ""
            })).filter(m => m.tipo !== "" && m.num !== "") : [];
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

            // AJUSTE DE FILAS: Si el dato estaba en la 5 y hay que subir 5, 
            // los índices reales en el objeto JSON suelen ser 0, 1 y 2.
            const idxNombres = 0; // Fila superior real
            const idxAcumulados = 1; 
            const idxMaximos = 2;

            // Columnas D(3) a M(12)
            for (let i = 3; i <= 12; i++) { 
                cardasData.push({
                    id: i - 2,
                    t:  filas[idxNombres]?.c[i]?.v || `CARDA ${i-2}`,
                    ac: parseFloat(filas[idxAcumulados]?.c[i]?.v || 0),
                    max: parseFloat(filas[idxMaximos]?.c[i]?.v || 1000)
                });
            }
            return cardasData;
        } catch (error) {
            console.error("Error en obtenerDatosCardas:", error);
            return [];
        }
    }
};
