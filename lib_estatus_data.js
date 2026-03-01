/* lib_estatus_data.js */
/* VERSION 3.1 DEFINITIVA
   - Compatible con JSON real de tu Sheet
*/

const SatexEstatusData = {

    async actualizarDesdeSheet() {

        const datos = await SatexDataLoader.obtenerDatosPrincipales();

        // CONTINUAS
        const cont = document.getElementById("estatus-continuas");
        if (cont) cont.textContent = datos.continuas;

        // OPEN-END
        const oe = document.getElementById("estatus-openend");
        if (oe) oe.textContent = datos.openEnd;

        // CONERAS
        const con = document.getElementById("estatus-coneras");
        if (con) con.textContent = datos.coneras;

        // FECHA
        const fechaElemento = document.getElementById("fecha-actualizacion");
        if (fechaElemento && datos.fecha) {
            fechaElemento.textContent = `(Fecha Act.: ${datos.fecha})`;
        }

    }

};
