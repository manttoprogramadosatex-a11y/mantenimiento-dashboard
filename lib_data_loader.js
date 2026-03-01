/* lib_data_loader.js - VERSIÓN FINAL SINCRONIZADA */
const SHEET_ID = "1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok";

const SatexDataLoader = {
    // Lee datos de la pestaña principal (gid=0)
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

    // Lee Máquinas Paradas de la pestaña correspondiente
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
            console.error("Error cargando Maquinas Paradas:", error);
            return [];
        }
    },

    // NUEVA: Lee Toneladas de "Info Cardas" (gid=1547200035)
    async obtenerDatosCardas() {
        try {
            const timestamp = new Date().getTime();
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=1547200035&t=${timestamp}`;
            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            
            const filas = json.table.rows;
            let cardasData = [];

            // Mapeo: Columnas D(3) a M(12)
            // Fila 5 (index 4) -> Nombres (Carda 1, 2...)
            // Fila 6 (index 5) -> Toneladas Act.
            // Fila 7 (index 6) -> Toneladas Max.
            for (let i = 3; i <= 12; i++) { 
                cardasData.push({
                    id: i - 2,
                    t:  filas[4]?.c[i]?.v || `CARDA ${i-2}`,
                    ac: parseFloat(filas[5]?.c[i]?.v || 0),
                    max: parseFloat(filas[6]?.c[i]?.v || 1000)
                });
            }
            return cardasData;
        } catch (error) {
            console.error("Error en obtenerDatosCardas:", error);
            return [];
        }
    }
};
