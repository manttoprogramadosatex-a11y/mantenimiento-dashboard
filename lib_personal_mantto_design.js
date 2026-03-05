/* lib_personal_mantto_design.js */
const SatexPersonalManttoDesign = {
    // Ahora recibe ambos valores dinámicos
    render: function(id, valorFaltas = "...", valorNegativos = "...") {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="width: 100%; height: 100%; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 4px; padding: 2px; box-sizing: border-box;">
            
            ${this.crearBotonPersonal("Vacaciones Programadas", null, "#4caf50", "SatexPersonalVacacionesBridge.abrirSheet()")}
            
            ${this.crearBotonPersonal("Roll de turnos", null, "#00bcd4", "SatexPersonalRollBridge.abrirSheet()")}

            ${this.crearBotonPersonal("Faltas", valorFaltas, "#f44336", "SatexPersonalManttoDesign.handleFaltasClick()")}
            
            ${this.crearBotonPersonal("Registros Negativos", valorNegativos, "#f9b218", "SatexPersonalManttoDesign.handleNegativosClick()")}

        </div>`;
    },

    handleFaltasClick: async function() {
        SatexPersonalFaltasBridge.abrirSheet();
        const nuevoMax = await SatexPersonalFaltasBridge.obtenerMaxColumnaA();
        // Recuperamos el valor actual de negativos para no pisarlo
        const valNeg = document.querySelector('[style*="color: rgb(249, 178, 24)"]').innerText;
        this.render("personal-mantto-scroll", nuevoMax, valNeg);
    },

    handleNegativosClick: async function() {
        SatexPersonalNegativosBridge.abrirSheet();
        const nuevoMax = await SatexPersonalNegativosBridge.obtenerMaxColumnaA();
        // Recuperamos el valor actual de faltas para no pisarlo
        const valFaltas = document.querySelector('[style*="color: rgb(244, 67, 54)"]').innerText;
        this.render("personal-mantto-scroll", valFaltas, nuevoMax);
    },

    crearBotonPersonal: function(texto, valor, color, accion) {
        const tieneNumero = valor !== null;
        
        return `
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(0,0,0,0.15); padding: 1px 5px; border-radius: 3px; height: 100%; box-sizing: border-box;">
            <button onclick="${accion}" style="width: ${tieneNumero ? '70%' : '100%'}; height: 90%; background: #2f5577; color: white; border: 1px solid ${color}; border-radius: 3px; font-size: 10px; font-weight: bold; text-transform: uppercase; cursor: pointer; line-height: 1; display: flex; align-items: center; justify-content: center; text-align: center; padding: 0 2px;"
                onmousedown="this.style.transform='scale(0.96)'"
                onmouseup="this.style.transform='scale(1)'">
                ${texto}
            </button>
            ${tieneNumero ? `
                <div style="width: 25%; color: ${color}; font-size: 16px; font-weight: bold; text-align: right; font-family: 'Segoe UI', sans-serif;">
                    ${valor}
                </div>
            ` : ''}
        </div>`;
    }
};
