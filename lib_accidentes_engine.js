/* lib_accidentes_engine.js */
/* VERSION 2.3
   - Auto actualización cada 2 minutos
   - Evita crear múltiples intervalos
   - No modifica layout
*/

const SHEET_ACCIDENTES_ID = "14moaQL1gg0Ia6Qg-Ww1W5tCuEO8X5IUESyqI5ajbB2g";

const SatexAccidentesEngine = {

    _intervalo: null,

    async inicializar() {
        const datos = await this.obtenerDesdeSheet();
        SatexAccidentes.render("accidentes-scroll", datos);
    },

    iniciarAutoActualizacion() {
        if (this._intervalo) return;

        this._intervalo = setInterval(() => {
            this.inicializar();
        }, 120000); // 2 minutos
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

            if (!filas || filas.length === 0) return [];

            const datos = [];

            for (let i = 0; i < filas.length; i++) {

                const c = filas[i].c;

                const item   = c[1]?.f || c[1]?.v || "";
                const nombre = c[2]?.v || "";
                const puesto = c[3]?.v || "";
                const fecha  = c[4]?.f || "";
                const dias   = c[5]?.f || c[5]?.v || "";

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

/* Inicialización segura */
document.addEventListener("DOMContentLoaded", () => {
    SatexAccidentesEngine.inicializar();
    SatexAccidentesEngine.iniciarAutoActualizacion();
});
