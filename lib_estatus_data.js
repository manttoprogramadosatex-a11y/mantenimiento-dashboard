
/* lib_estatus_data.js */
/* VERSION 4.0
   - Actualiza Husos
   - Actualiza Fecha
   - Actualiza Máquinas Paradas correctamente
*/

const SatexEstatusData = {

    async actualizarDesdeSheet() {

        // ===== HUSOS =====
        const datos = await SatexDataLoader.obtenerDatosPrincipales();

        const cont = document.getElementById("estatus-continuas");
        const oe   = document.getElementById("estatus-openend");
        const con  = document.getElementById("estatus-coneras");
        const fechaElemento = document.getElementById("fecha-actualizacion");

        if (cont) cont.textContent = datos.continuas;
        if (oe)   oe.textContent   = datos.openEnd;
        if (con)  con.textContent  = datos.coneras;

        if (fechaElemento && datos.fecha) {
            fechaElemento.textContent = `(Fecha Act.: ${datos.fecha})`;
        }

        // ===== MAQUINAS PARADAS =====
        const maquinas = await SatexDataLoader.obtenerMaquinasParadas();

        // Render lista derecha
        if (window.SatexMaquinasInactivas) {
            SatexMaquinasInactivas.render("maquinas-paradas-scroll", maquinas);
        }

        // Actualizar contador rojo
        const indicador = document.getElementById("num-maquinas-paradas");
        if (indicador) {
            indicador.textContent = maquinas.length;
        }

    }

};
