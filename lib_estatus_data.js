/* lib_estatus_data.js */
/* VERSION 2.0
   - Conectado a Google Sheets
   - Datos reales en tiempo real
   - No modifica diseño
*/

const SatexEstatusData = {

    async actualizarDesdeSheet() {

        const datos = await SatexDataLoader.obtenerHusosInactivos();

        const cont = document.getElementById("estatus-continuas");
        const oe   = document.getElementById("estatus-openend");
        const con  = document.getElementById("estatus-coneras");

        if (cont) cont.textContent = datos.continuas;
        if (oe)   oe.textContent   = datos.openEnd;
        if (con)  con.textContent  = datos.coneras;

    }

};
