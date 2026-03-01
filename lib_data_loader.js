/* lib_data_loader.js */
/* VERSION 2.0 ESTABLE TOTAL
   - Todo lee del mismo Google Sheet publicado
   - Fecha desde A2 (gid=0)
   - Husos desde columnas B2, C2, D2
   - No rompe diseño
*/

const SatexDataLoader = {

    // ==============================
    // LECTURA GENERAL DESDE GID=0
    // ==============================
    async obtenerDatosPrincipales() {
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

            if (!filas || filas.length < 2) {
                return {
                    fecha: "",
                    continuas: 0,
                    openEnd: 0,
                    coneras: 0
                };
            }

            const fila = filas[1].c;

            return {
                fecha: fila[0]?.f || fila[0]?.v || "",
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
    }

};
