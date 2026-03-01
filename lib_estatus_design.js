// lib_estatus_design.js
// VERSION 1.2.1
// Ajuste para que el botón DETALLES CARDAS abra la pestaña correspondiente

const SatexEstatusDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="background-color: #243b55; padding: 0 10px; display: flex; align-items: center; border-bottom: 2px solid #f9b218; height: 55px; gap: 8px; font-family: Calibri, sans-serif;">
            
            <div style="flex-shrink: 0; color: white; text-align: right; line-height: 1; padding-right: 10px; border-right: 1px solid #444;">
                <div style="font-size: 20px; font-weight: bold;">Estatus planta ►</div>
                <div style="font-size: 14px; color: #a1b1c1;">Info. Cardas ▼</div>
            </div>

            ${this.crearBloque("CONTINUAS (INACT.)", "14", "Husos", "estatus-continuas")}
            ${this.crearBloque("OPEN-END (INACT.)", "6", "Husos", "estatus-openend")}
            ${this.crearBloque("CONERAS (INACT.)", "4", "Husos", "estatus-coneras")}

            <div style="width: 130px; background: rgba(0,0,0,0.2); border-left: 3px solid #ff4444; padding: 0 8px; height: 45px; display: flex; align-items: center; gap: 5px;">
                <div style="color: #a1b1c1; font-size: 13px; font-weight: bold; line-height: 1;">MÁQUINAS PARADAS</div>
                <div id="num-maquinas-paradas" style="color: #ff4444; font-size: 32px; font-weight: bold;">0</div>
            </div>

            <!-- TABLA -->
            <div style="flex-grow: 1; height: 45px; border: 1px solid #ff4444; border-radius: 4px; background: rgba(0,0,0,0.3); overflow: hidden; display: flex; flex-direction: column;">
                
                <div style="display: flex; background: rgba(0,0,0,0.5); color: #ff8c69; font-size: 12px; font-weight: bold; border-bottom: 1px solid #ff4444; padding: 1px 0;">
                    <div style="width: 35%; text-align: center;">TIPO</div>
                    <div style="width: 15%; text-align: center;">NÚM</div>
                    <div style="width: 30%; text-align: center;">DESDE</div>
                    <div style="width: 20%; text-align: center;">DÍAS</div>
                </div>

                <div id="maquinas-paradas-scroll" style="flex-grow: 1; overflow-y: auto;"></div>
            </div>

            <div style="text-align: right; width: 155px; line-height: 1.1;">
                <div id="fecha-actualizacion" style="color: #a1b1c1; font-size: 11px; margin-bottom: 2px;">
                    (Fecha Act.: --)
                </div>

                <!-- 🚀 BOTÓN DETALLES CARDAS MODIFICADO -->
                <button 
                    id="btn-detalles-cardas"
                    style="background: transparent; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 3px 8px; font-size: 12px; font-weight: bold; cursor: pointer;"
                    onclick="window.open('https://docs.google.com/spreadsheets/d/e/2PACX-1vT7wFZesHZM_4ed4aj7oAU4MgNvuhZ8AQ-CUL_4QkrMzzR4PawAQ36-hGTvYhxeslLKjFzvfSwApNmT/pubhtml?gid=1547200035&single=true', '_blank');"
                >
                    DETALLES CARDAS
                </button>
            </div>

        </div>`;
    },

    crearBloque: function(titulo, valor, unidad, id) {
        return `
        <div style="width: 125px; background: rgba(0,0,0,0.15); border-left: 3px solid #f9b218; padding: 0 6px; height: 45px; display: flex; flex-direction: column; justify-content: center;">
            <div style="color: #a1b1c1; font-size: 12px; font-weight: bold; line-height: 1; white-space: nowrap; overflow: hidden;">
                ${titulo}
            </div>
            <div style="display: flex; align-items: baseline; gap: 4px; line-height: 1;">
                <span id="${id}" style="color: #f9b218; font-size: 26px; font-weight: bold;">
                    ${valor}
                </span>
                <span style="color: #a1b1c1; font-size: 14px;">
                    ${unidad}
                </span>
            </div>
        </div>`;
    }
};
