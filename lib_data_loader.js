/* lib_data_loader.js */
const SHEET_ID = "1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok";

const SatexDataLoader = {
    async obtenerDatosCardas() {
        try {
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Informacion%20Cardas&v=${new Date().getTime()}`;
            const respuesta = await fetch(url);
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const filas = json.table.rows;

            // MAPEO SEGÚN TU CAPTURA DE PANTALLA:
            // Fila 5 de Excel (Nombres) = filas[4] en JS
            // Fila 6 de Excel (Toneladas Act) = filas[5] en JS
            // Fila 7 de Excel (Toneladas Max) = filas[6] en JS
            
            const filaNombres = filas[4].c; 
            const filaActual = filas[5].c; 
            const filaMaximas = filas[6].c; 

            const resultado = [];
            // Columnas D a M (índices 3 a 12 en JavaScript)
            for (let i = 3; i <= 12; i++) {
                const nombre = filaNombres[i]?.v || `CARDA ${i - 2}`;
                const valorAc = filaActual[i]?.v || 0;
                const valorMax = filaMaximas[i]?.v || 1000;

                resultado.push({
                    id: i - 2,
                    t: nombre.toString().toUpperCase(),
                    ac: parseFloat(valorAc),
                    max: parseFloat(valorMax)
                });
            }
            return resultado;
        } catch (error) {
            console.error("Error cargando Cardas:", error);
            return null;
        }
    },

    async obtenerDatosPrincipales() {
        try {
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=0&v=${new Date().getTime()}`;
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
    }
};
