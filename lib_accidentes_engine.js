/* lib_accidentes_engine.js */
/* VERSION 2.0
   - Conecta ACCIDENTES a Google Sheets
   - Lee columnas B, C, D, E, F desde fila 3
   - No modifica estructura visual
   - No altera layout
   - Compatible con render existente
*/

const SHEET_ACCIDENTES_ID = "14moaQL1gg0Ia6Qg-Ww1W5tCuEO8X5IUESyqI5ajbB2g";

const SatexAccidentesEngine = {

    async inicializar() {
        const datos = await this.obtenerDesdeSheet();
        SatexAccidentes.render("accidentes-scroll", datos);
    },

    async obtenerDesdeSheet() {
        try {

            const timestamp = new Date().getTime();

            const url =
            `https://docs.google.com/spreadsheets/d/${SHEET_ACCIDENTES_ID}/gviz/tq?tqx=out:json&gid=0&t=${timestamp}`;

            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();

            const json = JSON.parse(
                texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1)
            );

            const filas = json.table.rows;

            if (!filas || filas.length < 3) return [];

            const datos = [];

            // Empezamos en índice 2 (fila 3 real)
            for (let i = 2; i < filas.length; i++) {

                const c = filas[i].c;

                const item   = c[1]?.v || "";
                const nombre = c[2]?.v || "";
                const puesto = c[3]?.v || "";
                const fecha  = c[4]?.f || c[4]?.v || "";
                const dias   = c[5]?.v || "";

                if (nombre !== "") {
                    datos.push({
                        item: item.toString(),
                        nombre: nombre.toString(),
                        puesto: puesto.toString(),
                        fecha: fecha.toString(),
                        dias: dias.toString()
                    });
                }
            }

            return datos;

        } catch (error) {
            console.error("Error cargando Accidentes:", error);
            return [];
        }
    }

};
