/* lib_estatus_data.js */
/* VERSION 2.6
   - Actualiza Husos
   - Actualiza Fecha Act desde A2
   - Actualiza Maquinas Paradas
   - Actualiza Indicador
*/

const SatexEstatusData = {

    async actualizarDesdeSheet() {

        // 🔹 HUSOS + FECHA
        const datosHusos = await SatexDataLoader.obtenerHusosInactivos();

        const cont = document.getElementById("estatus-continuas");
        const oe   = document.getElementById("estatus-openend");
        const con  = document.getElementById("estatus-coneras");

        if (cont) cont.textContent = datosHusos.continuas;
        if (oe)   oe.textContent   = datosHusos.openEnd;
        if (con)  con.textContent  = datosHusos.coneras;

        // 🔹 ACTUALIZAR FECHA (A2)
        const fechaElemento = document.getElementById("fecha-actualizacion");

        if (fechaElemento && datosHusos.fechaActualizacion) {
            fechaElemento.textContent = `(Fecha Act.: ${datosHusos.fechaActualizacion})`;
        }

        // 🔹 MAQUINAS PARADAS
        const maquinas = await SatexDataLoader.obtenerMaquinasParadas();

        if (document.getElementById("maquinas-paradas-scroll")) {
            SatexMaquinasInactivas.render("maquinas-paradas-scroll", maquinas);
        }

        // 🔹 INDICADOR
        const indicador = document.getElementById("num-maquinas-paradas");

        if (indicador) {
            indicador.textContent = maquinas.length;
        }

    }
};
