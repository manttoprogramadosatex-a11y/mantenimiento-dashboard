/* lib_data_loader.js */
/* VERSION 4.9
   - Búsqueda dinámica por etiquetas (Toneladas Act. / Toneladas Max.)
   - Elimina el error de desfase por filas vacías
*/

const SHEET_ID = "1tLFtdmbhyeE90NSqTvswbGzxC33BLUGf6b5HczUSlok";

const SatexDataLoader = {
    async obtenerDatosCardas() {
        try {
            const timestamp = new Date().getTime();
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Informacion%20Cardas&t=${timestamp}`;
            const respuesta = await fetch(url, { cache: "no-store" });
            const texto = await respuesta.text();
            const json = JSON.parse(texto.substring(texto.indexOf("{"), texto.lastIndexOf("}") + 1));
            const filas = json.table.rows;

            // 1. Encontrar los índices de las filas correctas dinámicamente
            let idxNombres = -1;
            let idxActual = -1;
            let idxMaximo = -1;

            filas.forEach((fila, index) => {
                const celdaB = fila.c[1]?.v?.toString().trim() || "";
                const celdaD = fila.c[3]?.v?.toString().trim() || "";

                if (celdaD === "Carda 1") idxNombres = index;
                if (celdaB === "Toneladas Act.") idxActual = index;
                if (celdaB === "Toneladas Max. Vida") idxMaximo = index;
            });

            // Si no encuentra las etiquetas, usamos un respaldo (fallback) 
            // pero con los índices que me indicaste (Fila 5, 6, 7 -> 4, 5, 6)
            const rNom = idxNombres !== -1 ? filas[idxNombres].c : filas[4].c;
            const rAct = idxActual !== -1 ? filas[idxActual].c : filas[5].c;
            const rMax = idxMaximo !== -1 ? filas[idxMaximo].c : filas[6].c;

            const resultado = [];
            // Columnas D a M (3 a 12)
            for (let i = 3; i <= 12; i++) {
                resultado.push({
                    id: i - 2,
                    t: rNom[i]?.v || `CARDA ${i-2}`,
                    ac: parseFloat(rAct[i]?.v) || 0,
                    max: parseFloat(rMax[i]?.v) || 1000
                });
            }
            return resultado;
        } catch (error) {
            console.error("Error cargando Cardas:", error);
            return null;
        }
    },

    // Estos se mantienen para asegurar que el resto del tablero funcione
    async obtenerDatosPrincipales() {
        try {
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=0`;
            const res = await fetch(url);
            const txt = await res.text();
            const json = JSON.parse(txt.substring(txt.indexOf("{"), txt.lastIndexOf("}") + 1));
            const f = json.table.rows[0].c;
            return { fecha: f[0]?.f || "", continuas: f[1]?.v || 0, openEnd: f[2]?.v || 0, coneras: f[3]?.v || 0 };
        } catch (e) { return null; }
    },

    async obtenerMaquinasParadas() {
        try {
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Maquinas%20Paradas`;
            const res = await fetch(url);
            const txt = await res.text();
            const json = JSON.parse(txt.substring(txt.indexOf("{"), txt.lastIndexOf("}") + 1));
            return json.table.rows.map(f => ({ desde: f.c[0]?.f || "", tipo: f.c[1]?.v || "", num: f.c[2]?.v || "" })).filter(m => m.num !== "");
        } catch (e) { return []; }
    }
};
