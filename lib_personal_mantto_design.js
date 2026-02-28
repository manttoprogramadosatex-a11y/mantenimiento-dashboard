const SatexPersonalManttoDesign = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;

        // Estructura en cuadrícula (2x2) para los 4 botones solicitados
        container.innerHTML = `
        <div style="width: 100%; height: 100%; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 4px; padding: 2px; box-sizing: border-box;">
            
            ${this.crearBotonPersonal("Vacaciones Programadas", null, "#4caf50")}
            ${this.crearBotonPersonal("Roll de turnos", null, "#00bcd4")}

            ${this.crearBotonPersonal("Faltas", "02", "#f44336")}
            ${this.crearBotonPersonal("Registros Negativos", "05", "#f9b218")}

        </div>`;
    },

    // Función auxiliar para crear los botones (detecta si lleva número o no)
    crearBotonPersonal: function(texto, valor, color) {
        const tieneNumero = valor !== null;
        
        return `
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(0,0,0,0.3); padding: 2px 5px; border-radius: 4px; height: 100%; box-sizing: border-box;">
            <button style="width: ${tieneNumero ? '65%' : '100%'}; height: 90%; background: #2f5577; color: white; border: 1px solid ${color}; border-radius: 3px; font-size: 8px; font-weight: bold; text-transform: uppercase; cursor: pointer; line-height: 1.1; display: flex; align-items: center; justify-content: center; text-align: center;"
                onmousedown="this.style.transform='scale(0.95)'"
                onmouseup="this.style.transform='scale(1)'">
                ${texto}
            </button>
            ${tieneNumero ? `
                <div style="width: 30%; color: ${color}; font-size: 16px; font-weight: bold; text-align: right; font-family: 'Segoe UI', sans-serif;">
                    ${valor}
                </div>
            ` : ''}
        </div>`;
    }
};
