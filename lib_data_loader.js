/* lib_data_loader.js */
/* VERSION 5.0
   - Se agrega obtenerDatosCardas()
   - Lee pestaña: "Informacion Cardas"
   - Cardas D→N
   - Fila 6 = Ac.
   - Fila 7 = Max.
*/

const SHEET_ID = "1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok";

const SatexDataLoader = {

    // ==============================
    // HUSOS + FECHA (gid=0)
    // ==============================
    async obtenerDatosPrincipales() {
        try {

            const timestamp = new Date().getTime();

            const url =
            `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=0&t=${timestamp}`;

            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();

            const json = JSON.parse(
                texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1)
            );

            const filas = json.table.rows;

            if (!filas || filas.length === 0) {
                return {
                    fecha: "",
                    continuas: 0,
                    openEnd: 0,
                    coneras: 0
                };
            }

            const fila = filas[0].c;

            return {
                fecha: fila[0]?.f || "",
                continuas: fila[1]?.v || 0,
                openEnd: fila[2]?.v || 0,
                coneras: fila[3]?.v || 0
            };

        } catch (error) {
            console.error("Error cargando datos principales:", error);
            return {
                fecha: "",
                continuas: 0,
                openEnd: 0,
                coneras: 0
            };
        }
    },

    // ==============================
    // MAQUINAS PARADAS
    // ==============================
    async obtenerMaquinasParadas() {
        try {

            const timestamp = new Date().getTime();

            const url =
            `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Maquinas%20Paradas&t=${timestamp}`;

            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();

            const json = JSON.parse(
                texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1)
            );

            const filas = json.table.rows;

            if (!filas || filas.length === 0) return [];

            return filas.map(f => {
                const c = f.c;

                return {
                    desde: c[0]?.f || c[0]?.v || "",
                    tipo:  c[1]?.v || "",
                    num:   c[2]?.v || ""
                };
            }).filter(m => m.tipo !== "" && m.num !== "");

        } catch (error) {
            console.error("Error cargando Maquinas Paradas:", error);
            return [];
        }
    },

    // ==============================
    // CARDAS (Informacion Cardas)
    // ==============================
    async obtenerDatosCardas() {
        try {

            const timestamp = new Date().getTime();

            const url =
            `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Informacion%20Cardas&t=${timestamp}`;

            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();

            const json = JSON.parse(
                texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1)
            );

            const filas = json.table.rows;

            if (!filas || filas.length < 7) return [];

            // Fila 6 y 7 (index 5 y 6)
            const filaAc  = filas[5].c; // Fila 6
            const filaMax = filas[6].c; // Fila 7

            // Columnas D (3) a N (13)
            const datos = [];

            for (let i = 3; i <= 13; i++) {
                datos.push({
                    id: (i - 2),
                    t: `CARDA ${i - 2}`,
                    ac: filaAc[i]?.v || 0,
                    max: filaMax[i]?.v || 0
                });
            }

            return datos;

        } catch (error) {
            console.error("Error cargando Cardas:", error);
            return [];
        }
    }

};

