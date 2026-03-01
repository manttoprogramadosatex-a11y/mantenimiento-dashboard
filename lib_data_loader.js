/* lib_data_loader.js */
/* VERSION 1.2
   - Carga datos reales desde Google Sheets
   - Anti-cache agregado
   - Actualización estable cada 15s
   - Agregado: Maquinas Paradas
   - Solo datos, no toca diseño
*/

const SatexDataLoader = {

    async obtenerHusosInactivos() {

        try {

            const timestamp = new Date().getTime();

            const url =
            "https://docs.google.com/spreadsheets/d/1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok/gviz/tq?tqx=out:json&sheet=Husos%20inactivos&t=" + timestamp;

            const respuesta = await fetch(url, {
                method: "GET",
                cache: "no-store"
            });

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
    },

    // 🔥 NUEVA FUNCIÓN
    async obtenerMaquinasParadas() {

        try {

            const timestamp = new Date().getTime();

            const url =
            "https://docs.google.com/spreadsheets/d/1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok/gviz/tq?tqx=out:json&sheet=Maquinas%20Paradas&t=" + timestamp;

            const respuesta = await fetch(url, {
                method: "GET",
                cache: "no-store"
            });

            const texto = await respuesta.text();

            const json = JSON.parse(
                texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1)
            );

            const filas = json.table.rows;

            if (!filas || filas.length === 0) return [];

            // 🔥 Ignorar fila 1 (encabezados)
            return filas.slice(1).map(f => {

                const c = f.c;

                const fechaDesde = c[0]?.f || c[0]?.v || "";
                const tipo = c[1]?.v || "";
                const num = c[2]?.v || "";

                return {
                    tipo: tipo,
                    num: num,
                    desde: formatearFecha(fechaDesde),
                    dias: "" // no se usa, el render calcula
                };

            });

        } catch (error) {

            console.error("Error cargando Maquinas Paradas:", error);
            return [];

        }
    }

};

// 🔥 Función auxiliar para formatear fecha
function formatearFecha(fecha) {

    if (!fecha) return "";

    if (typeof fecha === "string") return fecha;

    const d = new Date(fecha);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    return `${y}/${m}/${day}`;
}
