/* lib_data_loader.js */
/* VERSION 4.7
   - Ajuste de índices definitivos para sincronizar con Excel:
   - Título (Fila 5 del Excel) -> filas[4]
   - Toneladas Act. (Fila 6 del Excel) -> filas[5]
   - Toneladas Max. (Fila 7 del Excel) -> filas[6]
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

            // MAPEO CORRECTO SEGÚN CAPTURA (Subimos 4 filas respecto al error anterior)
            // filas[4] -> Fila 5 de Excel (Nombres de Cardas)
            // filas[5] -> Fila 6 de Excel (Toneladas Act. - Celdas Amarillas)
            // filas[6] -> Fila 7 de Excel (Toneladas Max. - Celdas Blancas)
            const titulos  = filas[4].c; 
            const actuales = filas[5].c; 
            const maximos  = filas[6].c; 

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
