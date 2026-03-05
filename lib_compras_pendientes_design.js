/* lib_compras_pendientes_design.js */
const SatexComprasPendientesDesign = {
    
    // Ahora recibe el valor dinámico del bridge
    render: function(id, valorReal = "...") {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 2px; box-sizing: border-box; gap: 4px;">
            
            ${this.crearBotonCompras(
                "Req. Pendientes por pasar", 
                valorReal, 
                "#f9b218", 
                "SatexComprasPendientesDesign.handleBtnClick()"
            )}

            ${this.crearBotonCompras(
                "Req. en espera llegada", 
                "08", 
                "#ff9999", 
                ""
            )}

        </div>`;
    },

    // Función que se dispara al pulsar el botón
    handleBtnClick: async function() {
        // 1. Abrir la hoja de Google
        SatexComprasSheetBridge.abrirSheet();
        
        // 2. Buscar el nuevo máximo
        const nuevoMax = await SatexComprasSheetBridge.obtenerMaxColumnaA();
        
        // 3. Actualizar el tablero con el dato real
        this.render("compras-pendientes-scroll", nuevoMax);
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
