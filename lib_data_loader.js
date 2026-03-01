/* lib_data_loader.js */
/* VERSION 1.8 ESTABLE
   - Mantiene Husos funcionando
   - Mantiene Máquinas Paradas funcionando
   - Corrige lectura correcta de Fecha Cardas A2 (gid=0)
   - No rompe estructura visual
*/

const SatexDataLoader = {

    // ==============================
    // HUSOS INACTIVOS (YA FUNCIONABA)
    // ==============================
    async obtenerHusosInactivos() {
        try {
            const timestamp = new Date().getTime();
            const url =
                "https://docs.google.com/spreadsheets/d/1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok/gviz/tq?tqx=out:json&sheet=Husos%20inactivos&t=" + timestamp;

            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();

            const json = JSON.parse(
                texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1)
            );

            const filas = json.table.rows;

            if (!filas || filas.length < 2) {
                return { fechaActualizacion: "", continuas: 0, openEnd: 0, coneras: 0 };
            }

            const filaDatos = filas[1].c;

            return {
                fechaActualizacion: filaDatos[0]?.f || "",
                continuas: filaDatos[1]?.v || 0,
                openEnd: filaDatos[2]?.v || 0,
                coneras: filaDatos[3]?.v || 0
            };

        } catch (error) {
            console.error("Error cargando Husos Inactivos:", error);
            return { fechaActualizacion: "", continuas: 0, openEnd: 0, coneras: 0 };
        }
    },

    // ==============================
    // MÁQUINAS PARADAS (YA FUNCIONABA)
    // ==============================
    async obtenerMaquinasParadas() {
        try {
            const timestamp = new Date().getTime();
            const url =
                "https://docs.google.com/spreadsheets/d/1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok/gviz/tq?tqx=out:json&sheet=Maquinas%20Paradas&t=" + timestamp;

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
                    tipo: c[1]?.v || "",
                    num:  c[2]?.v || "",
                    desde: c[0]?.f || ""
                };
            });

        } catch (error) {
            console.error("Error cargando Maquinas Paradas:", error);
            return [];
        }
    },

    // ==============================
    // FECHA CARDAS (A2 - gid=0)
    // ==============================
    async obtenerFechaCardas() {
        try {
            const timestamp = new Date().getTime();

            const url =
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7wFZesHZM_4ed4aj7oAU4MgNvuhZ8AQ-CUL_4QkrMzzR4PawAQ36-hGTvYhxeslLKjFzvfSwApNmT/gviz/tq?tqx=out:json&gid=0&t=" + timestamp;

            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();

            const json = JSON.parse(
                texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1)
            );

            const filas = json.table.rows;

            if (!filas || filas.length < 2) return "";

            const fecha = filas[1].c[0]?.f || filas[1].c[0]?.v || "";

            return fecha;

        } catch (error) {
            console.error("Error cargando Fecha Cardas:", error);
            return "";
        }
    }
};
