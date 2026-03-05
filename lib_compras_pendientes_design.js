/* lib_compras_pendientes_design.js */
const SatexComprasPendientesDesign = {
    
    // Ahora recibe ambos valores reales
    render: function(id, valorPendientes = "...", valorEspera = "...") {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 2px; box-sizing: border-box; gap: 4px;">
            
            ${this.crearBotonCompras(
                "Req. Pendientes por pasar", 
                valorPendientes, 
                "#f9b218", 
                "SatexComprasPendientesDesign.handlePendientesClick()"
            )}

            ${this.crearBotonCompras(
                "Req. en espera llegada", 
                valorEspera, 
                "#ff9999", 
                "SatexComprasPendientesDesign.handleEsperaClick()"
            )}

        </div>`;
    },

    // Manejador para el primer botón
    handlePendientesClick: async function() {
        SatexComprasSheetBridge.abrirSheet();
        const nuevoMax = await SatexComprasSheetBridge.obtenerMaxColumnaA();
        // Obtenemos el valor actual del otro contador para no perderlo al re-renderizar
        const valorEsperaActual = document.querySelector('[style*="color: rgb(255, 153, 153)"]').innerText;
        this.render("compras-pendientes-scroll", nuevoMax, valorEsperaActual);
    },

    // Manejador para el segundo botón
    handleEsperaClick: async function() {
        SatexEsperaLlegadaBridge.abrirSheet();
        const nuevoMax = await SatexEsperaLlegadaBridge.obtenerMaxColumnaA();
        // Obtenemos el valor actual del primer contador para no perderlo
        const valorPendientesActual = document.querySelector('[style*="color: rgb(249, 178, 24)"]').innerText;
        this.render("compras-pendientes-scroll", valorPendientesActual, nuevoMax);
    },

    crearBotonCompras: function(texto, valor, color, accion) {
        return `
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(0,0,0,0.15); padding: 1px 6px; border-radius: 3px; height: 46%;">
            <button onclick="${accion}" style="width: 80%; height: 90%; background: #2f5577; color: white; border: 1px solid ${color}; border-radius: 3px; font-size: 10px; font-weight: bold; text-transform: uppercase; cursor: pointer; line-height: 1; display: flex; align-items: center; justify-content: center; text-align: center;"
                onmousedown="this.style.transform='scale(0.96)'"
                onmouseup="this.style.transform='scale(1)'">
                ${texto}
            </button>
            <div style="width: 15%; color: ${color}; font-size: 18px; font-weight: bold; text-align: right; font-family: 'Segoe UI', sans-serif;">
                ${valor}
            </div>
        </div>`;
    }
};
