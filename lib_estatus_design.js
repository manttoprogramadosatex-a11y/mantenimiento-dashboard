const SatexEstatusDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="background-color: #243b55; padding: 5px 10px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #f9b218;">
            <div style="flex-shrink: 0; color: white; text-align: right; line-height: 1.1; padding-right: 10px;">
                <div style="font-size: 14px; font-weight: bold; text-transform: uppercase;">Estatus planta ►</div>
                <div style="font-size: 12px; color: #a1b1c1;">Info. Cardas ▼</div>
            </div>

            ${this.crearBloque("CONTINUAS (INACT.)", "14", "Husos", "estatus-continuas")}
            ${this.crearBloque("OPEN-END (INACT.)", "6", "Husos", "estatus-openend")}
            ${this.crearBloque("CONERAS (INACT.)", "4", "Husos", "estatus-coneras")}

            <div style="flex: 1; display: flex; align-items: center; background: rgba(0,0,0,0.2); border-left: 3px solid #ff4444; padding: 2px 10px; height: 45px; gap: 15px;">
                <div style="display: flex; flex-direction: column; justify-content: center;">
                    <div style="color: #a1b1c1; font-size: 10px; font-weight: bold; text-transform: uppercase;">Máquinas Paradas</div>
                    <div id="num-maquinas-paradas" style="color: #ff4444; font-size: 24px; font-weight: bold; line-height: 1;">3</div>
                </div>
                <div id="maquinas-paradas-scroll" style="flex-grow: 1; height: 38px; border: 1px solid #ff4444; border-radius: 4px; background: rgba(0,0,0,0.4); overflow-y: auto;">
                </div>
                <div style="text-align: right;">
                    <div style="color: #a1b1c1; font-size: 9px; margin-bottom: 2px;">(Fecha Act.: 27-feb-2026)</div>
                    <button style="background: transparent; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 2px 8px; font-size: 10px; font-weight: bold; cursor: pointer;">DETALLES CARDAS</button>
                </div>
            </div>
        </div>`;
    },

    crearBloque: function(titulo, valor, unidad, id) {
        return `
        <div style="width: 160px; background: rgba(0,0,0,0.2); border-left: 3px solid #f9b218; padding: 2px 8px; height: 45px; display: flex; flex-direction: column; justify-content: center;">
            <div style="color: #a1b1c1; font-size: 10px; font-weight: bold; text-transform: uppercase;">${titulo}</div>
            <div style="display: flex; align-items: baseline; gap: 5px;">
                <span id="${id}" style="color: #f9b218; font-size: 22px; font-weight: bold; line-height: 1;">${valor}</span>
                <span style="color: #a1b1c1; font-size: 11px;">${unidad}</span>
            </div>
        </div>`;
    }
};
