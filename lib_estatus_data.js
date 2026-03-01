/* lib_estatus_data.js */
/* VERSION 2.4
   - Conectado a Google Sheets
   - Actualiza Husos
   - Actualiza Tabla Maquinas Paradas
   - Actualiza Indicador num-maquinas-paradas
   - No modifica diseño
*/

const SatexEstatusData = {

    async actualizarDesdeSheet() {

        // 🔹 1. HUSOS INACTIVOS
        const datosHusos = await SatexDataLoader.obtenerHusosInactivos();

        const cont = document.getElementById("estatus-continuas");
        const oe   = document.getElementById("estatus-openend");
        const con  = document.getElementById("estatus-coneras");

        if (cont) cont.textContent = datosHusos.continuas;
        if (oe)   oe.textContent   = datosHusos.openEnd;
        if (con)  con.textContent  = datosHusos.coneras;


        // 🔹 2. MAQUINAS PARADAS
        const maquinas = await SatexDataLoader.obtenerMaquinasParadas();

        const contenedorTabla = document.getElementById("maquinas-paradas-scroll");

        if (contenedorTabla) {
            SatexMaquinasInactivas.render("maquinas-paradas-scroll", maquinas);
        }


        // 🔹 3. INDICADOR DE CANTIDAD
        const indicador = document.getElementById("num-maquinas-paradas");

        if (indicador) {
            indicador.textContent = maquinas.length;
        }

    }

};
