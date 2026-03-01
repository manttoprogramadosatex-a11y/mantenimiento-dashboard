/* lib_estatus_data.js */
/* VERSION 4.1
   - Mantiene actualización de Husos y Máquinas Paradas
   - AÑADIDO: Actualización de Cardas cada ciclo
*/

const SatexEstatusData = {

    async actualizarDesdeSheet() {

        // 1. HUSOS Y FECHA
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

        // 2. MAQUINAS PARADAS
        const maquinas = await SatexDataLoader.obtenerMaquinasParadas();
        if (window.SatexMaquinasInactivas) {
            SatexMaquinasInactivas.render("maquinas-paradas-scroll", maquinas);
        }
        const indicador = document.getElementById("num-maquinas-paradas");
        if (indicador) {
            indicador.textContent = maquinas.length;
        }

        // 3. CARDAS (NUEVA INTEGRACIÓN)
        const datosCardas = await SatexDataLoader.obtenerDatosCardas();
        if (datosCardas && window.SatexCardasEngine) {
            SatexCardasEngine.dibujar("cardas-grid", datosCardas);
        }
    }
};
