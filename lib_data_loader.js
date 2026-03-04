/* lib_data_loader.js */
/* VERSION 4.1
   - Se agrega contador dinámico de OS ABIERTAS
   - Cuenta columna E = 'PENDIENTE'
   - No se modifica nada existente
*/

const SHEET_ID = "1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok";

// 🔴 NUEVO: Sheet Bitácora OS
const SHEET_OS_ID = "1DkFDe1cwp4hQjm4ip4Z8ZzEAPgiMY8e8qQMRMt2HHBU";

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
    // 🔴 OS ABIERTAS (BITÁCORA)
    // ==============================
    async obtenerOSAbiertas() {
        try {

            const timestamp = new Date().getTime();

            const query = encodeURIComponent(
                "select count(E) where E = 'PENDIENTE'"
            );

            const url =
            `https://docs.google.com/spreadsheets/d/${SHEET_OS_ID}/gviz/tq?gid=0&tqx=out:json&tq=${query}&t=${timestamp}`;

            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();

            const json = JSON.parse(
                texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1)
            );

            const total = json.table.rows[0]?.c[0]?.v || 0;

            return total;

        } catch (error) {
            console.error("Error cargando OS Abiertas:", error);
            return 0;
        }
    }

};
