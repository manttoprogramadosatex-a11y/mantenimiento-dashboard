/* lib_data_loader.js */
/* VERSION 3.0 DEFINITIVA
   - Lee correctamente fecha tipo DATE
   - Lee Husos desde B2, C2, D2
   - Funciona con tu JSON real confirmado
*/

const SatexDataLoader = {

    async obtenerDatosPrincipales() {
        try {

            const timestamp = new Date().getTime();

            const url =
            "https://docs.google.com/spreadsheets/d/1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok/gviz/tq?tqx=out:json&gid=0&t=" + timestamp;

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
                fecha: fila[0]?.f || "",      // 👈 usa .f porque es tipo date
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
