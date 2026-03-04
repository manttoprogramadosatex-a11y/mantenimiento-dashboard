/* lib_compras_pendientes_design.js */
/* VERSION 2.0
   - Render original intacto
   - Integra Google Sheet dinámico
   - Abre Sheet al hacer click
   - No borra nada existente
*/

const SatexComprasPendientesDesign = {

    async render(containerId) {

        const container = document.getElementById(containerId);
        if (!container) return;

        // ----- DISEÑO ORIGINAL (sin alterar estructura visual) -----

        container.innerHTML = `
            <div class="compras-wrapper">

                <div class="req-pendientes-btn" style="cursor:pointer;">
                    <span>REQ. PENDIENTES POR PASAR</span>
                    <span class="req-pendientes-numero">14</span>
                </div>

                <div class="req-espera-btn">
                    <span>REQ. EN ESPERA LLEGADA</span>
                    <span class="req-espera-numero">08</span>
                </div>

            </div>
        `;

        // ----- ACTUALIZAR VALOR DINÁMICO DESDE SHEET -----

        if (typeof SatexComprasSheetBridge !== "undefined") {

            const maximo = await SatexComprasSheetBridge.obtenerMaxColumnaA();

            const numeroElemento = container.querySelector(".req-pendientes-numero");

            if (numeroElemento) {
                numeroElemento.textContent = maximo;
            }
        }

        // ----- EVENTO CLICK PARA ABRIR SHEET -----

        const botonPendientes = container.querySelector(".req-pendientes-btn");

        if (botonPendientes) {
            botonPendientes.addEventListener("click", () => {
                if (typeof SatexComprasSheetBridge !== "undefined") {
                    SatexComprasSheetBridge.abrirSheet();
                }
            });
        }
    }
};
