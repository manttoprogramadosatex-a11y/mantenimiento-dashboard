/* lib_estatus_data.js */
/* VERSION 2.1
   - Conectado a Google Sheets
   - Datos reales en tiempo real
   - Agregado: Maquinas Paradas
   - No modifica diseño
*/

const SatexEstatusData = {

    async actualizarDesdeSheet() {

        // 🔹 1. Actualizar Husos Inactivos
        const datosHusos = await SatexDataLoader.obtenerHusosInactivos();

        const cont = document.getElementById("estatus-continuas");
        const oe   = document.getElementById("estatus-openend");
        const con  = document.getElementById("estatus-coneras");

        if (cont) cont.textContent = datosHusos.continuas;
        if (oe)   oe.textContent   = datosHusos.openEnd;
        if (con)  con.textContent  = datosHusos.coneras;


        // 🔹 2. Actualizar Máquinas Paradas
        const maquinas = await SatexDataLoader.obtenerMaquinasParadas();

        SatexMaquinasInactivas.render("maquinas-paradas-scroll", maquinas);

    }

};
