/* lib_data_loader.js */
/* VERSION 1.5
   - Carga Husos
   - Carga Maquinas Paradas
   - Obtiene Fecha A2 desde Husos inactivos
   - Anti-cache activo
   - Solo datos
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

            const fila = json.table.rows[0].c;

            return {
                fechaActualizacion: fila[0] ? fila[0].f : "",
                continuas: fila[1] ? fila[1].v : 0,
                openEnd:  fila[2] ? fila[2].v : 0,
                coneras:  fila[3] ? fila[3].v : 0
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
