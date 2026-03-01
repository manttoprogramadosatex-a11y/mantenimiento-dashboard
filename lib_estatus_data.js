/* lib_estatus_data.js */
/* VERSION 4.6
   - Mantiene ciclo de actualización de 15 segundos
*/

const SatexEstatusData = {

    async actualizarDesdeSheet() {
        const datos = await SatexDataLoader.obtenerDatosPrincipales();
        if (datos) {
            const cont = document.getElementById("estatus-continuas");
            const oe   = document.getElementById("estatus-openend");
            const con  = document.getElementById("estatus-coneras");
            const fe   = document.getElementById("fecha-actualizacion");

            if (cont) cont.textContent = datos.continuas;
            if (oe)   oe.textContent   = datos.openEnd;
            if (con)  con.textContent  = datos.coneras;
            if (fe && datos.fecha) fe.textContent = `(Fecha Act.: ${datos.fecha})`;
        }

        const maquinas = await SatexDataLoader.obtenerMaquinasParadas();
        if (window.SatexMaquinasInactivas) {
            SatexMaquinasInactivas.render("maquinas-paradas-scroll", maquinas);
        }
        const ind = document.getElementById("num-maquinas-paradas");
        if (ind) ind.textContent = maquinas.length;

        const datosCardas = await SatexDataLoader.obtenerDatosCardas();
        if (datosCardas) {
            SatexCardasEngine.dibujar("cardas-grid", datosCardas);
        }
    }
};
