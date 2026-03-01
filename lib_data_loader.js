/* lib_data_loader.js */
/* VERSION 4.1 ESTABLE Y NO BLOQUEANTE */

const SHEET_ID = "1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok";

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

            if (!respuesta.ok) {
                throw new Error("Respuesta no válida del Sheet");
            }

            const texto = await respuesta.text();

            const inicio = texto.indexOf("{");
            const fin = texto.lastIndexOf("}");

            if (inicio === -1 || fin === -1) {
                throw new Error("Formato inesperado del Sheet");
            }

            const json = JSON.parse(texto.substring(inicio, fin + 1));

            const filas = json?.table?.rows;

            if (!filas || filas.length === 0) {
                return this._datosVacios();
            }

            const fila = filas[0]?.c || [];

            return {
                fecha: fila[0]?.f || "",
                continuas: fila[1]?.v || 0,
                openEnd: fila[2]?.v || 0,
                coneras: fila[3]?.v || 0
            };

        } catch (error) {
            console.warn("Sheet principal no disponible:", error);
            return this._datosVacios();
        }
    },

    _datosVacios() {
        return {
            fecha: "",
            continuas: 0,
            openEnd: 0,
            coneras: 0
        };
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

            if (!respuesta.ok) {
                throw new Error("Respuesta no válida del Sheet");
            }

            const texto = await respuesta.text();

            const inicio = texto.indexOf("{");
            const fin = texto.lastIndexOf("}");

            if (inicio === -1 || fin === -1) {
                throw new Error("Formato inesperado del Sheet");
            }

            const json = JSON.parse(texto.substring(inicio, fin + 1));

            const filas = json?.table?.rows;

            if (!filas || filas.length === 0) return [];

            return filas
                .map(f => {
                    const c = f.c || [];
                    return {
                        desde: c[0]?.f || c[0]?.v || "",
                        tipo:  c[1]?.v || "",
                        num:   c[2]?.v || ""
                    };
                })
                .filter(m => m.tipo !== "" && m.num !== "");

        } catch (error) {
            console.warn("Sheet Maquinas Paradas no disponible:", error);
            return [];
        }
    }

};
