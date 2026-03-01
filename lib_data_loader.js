/* lib_data_loader.js */
/* VERSION 1.6
   - Lee A2 correctamente
   - Lee husos desde fila 2
   - Anti-cache
*/

const SatexDataLoader = {

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
                return {
                    fechaActualizacion: "",
                    continuas: 0,
                    openEnd: 0,
                    coneras: 0
                };
            }

            // 🔹 Fila 2 = índice 1 (A2)
            const filaDatos = filas[1].c;

            return {
                fechaActualizacion: filaDatos[0]?.f || "",
                continuas: filaDatos[1]?.v || 0,
                openEnd: filaDatos[2]?.v || 0,
                coneras: filaDatos[3]?.v || 0
            };

        } catch (error) {

            console.error("Error cargando Husos Inactivos:", error);

            return {
                fechaActualizacion: "",
                continuas: 0,
                openEnd: 0,
                coneras: 0
            };

        }
    },

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
    }
};
