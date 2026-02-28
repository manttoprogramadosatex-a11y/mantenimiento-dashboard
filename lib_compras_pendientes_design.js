const SatexComprasPendientesDesign = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;

        // Estructura de 2 botones con número (estilo Preventivos)
        container.innerHTML = `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 2px; box-sizing: border-box; gap: 4px;">
            
            ${this.crearBotonCompras("Req. Pendientes por pasar", "14", "#f9b218")}

            ${this.crearBotonCompras("Req. en espera llegada", "08", "#ff9999")}

        </div>`;
    },

    // Función auxiliar para mantener el estilo visual de botes
    crearBotonCompras: function(texto, valor, color) {
        return `
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(0,0,0,0.3); padding: 2px 5px; border-radius: 4px; height: 45%;">
            <button style="width: 70%; height: 90%; background: #2f5577; color: white; border: 1px solid ${color}; border-radius: 3px; font-size: 8.5px; font-weight: bold; text-transform: uppercase; cursor: pointer; line-height: 1;"
                onmousedown="this.style.transform='scale(0.95)'"
                onmouseup="this.style.transform='scale(1)'">
                ${texto}
            </button>
            <div style="width: 25%; color: ${color}; font-size: 18px; font-weight: bold; text-align: right; font-family: 'Segoe UI', sans-serif;">
                ${valor}
            </div>
        </div>`;
    }
};
