/* lib_data_loader.js */
/* VERSION 1.0
   - Carga datos reales desde Google Sheets
   - Solo datos, no toca diseño
*/

const SatexDataLoader = {

    async obtenerHusosInactivos() {

        try {

            const url =
            "https://docs.google.com/spreadsheets/d/1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok/gviz/tq?tqx=out:json&sheet=Husos%20inactivos";

            const respuesta = await fetch(url);
            const texto = await respuesta.text();

            const json = JSON.parse(
                texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1)
            );

            const fila = json.table.rows[0].c;

            return {
                continuas: fila[1] ? fila[1].v : 0,
                openEnd:  fila[2] ? fila[2].v : 0,
                coneras:  fila[3] ? fila[3].v : 0
            };

        } catch (error) {

            console.error("Error cargando Husos Inactivos:", error);

            return {
                continuas: 0,
                openEnd: 0,
                coneras: 0
            };

        }
    }

};
