/* lib_data_loader.js */
/* VERSION 4.0 DEFINITIVA
   - Husos (gid=0)
   - Máquinas Paradas (pestaña: "Maquinas Paradas")
   - Ignora fila 1 (encabezados)
   - Columnas:
        A = Desde
        B = Tipo
        C = Numero
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

            // Ignorar fila 1 (encabezado)
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
    }

};

