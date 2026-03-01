/* lib_estatus_data.js */
/* VERSION 2.7
   - Actualiza Husos
   - Actualiza Fecha Act desde A2 CARDAS
   - Actualiza Maquinas Paradas
*/

const SatexEstatusData = {

    async actualizarDesdeSheet() {

        // 🔹 HUSOS + FECHA DE HUSOS (con datos de Husos)
        const datosHusos = await SatexDataLoader.obtenerHusosInactivos();
        const cont = document.getElementById("estatus-continuas");
        const oe   = document.getElementById("estatus-openend");
        const con  = document.getElementById("estatus-coneras");

        if (cont) cont.textContent = datosHusos.continuas;
        if (oe)   oe.textContent   = datosHusos.openEnd;
        if (con)  con.textContent  = datosHusos.coneras;

        // 🔹 FECHA DE CARDAS (A2)
        const fechaCardas = await SatexDataLoader.obtenerFechaCardas();
        const fechaElemento = document.getElementById("fecha-actualizacion");

        if (fechaElemento && fechaCardas) {
            fechaElemento.textContent = `(Fecha Act.: ${fechaCardas})`;
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
