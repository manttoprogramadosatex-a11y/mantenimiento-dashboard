const SatexEstatusDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="background-color: #243b55; padding: 5px 15px; display: flex; align-items: center; border-bottom: 1px solid #f9b218; height: 55px; gap: 10px;">
            <div style="flex-shrink: 0; color: white; text-align: right; line-height: 1.2; padding-right: 15px;">
                <div style="font-size: 14px; font-weight: bold; text-transform: uppercase;">Estatus planta ►</div>
                <div style="font-size: 11px; color: #a1b1c1;">Info. Cardas ▼</div>
            </div>

            ${this.crearBloque("CONTINUAS (INACT.)", "14", "Husos", "estatus-continuas")}
            ${this.crearBloque("OPEN-END (INACT.)", "6", "Husos", "estatus-openend")}
            ${this.crearBloque("CONERAS (INACT.)", "4", "Husos", "estatus-coneras")}

            <div style="flex-grow: 1; display: flex; align-items: center; background: rgba(0,0,0,0.2); border-left: 3px solid #ff4444; padding: 2px 12px; height: 48px; gap: 15px;">
                <div style="display: flex; align-items: center; gap: 10px; min-width: 130px;">
                    <div style="color: #a1b1c1; font-size: 10px; font-weight: bold; text-transform: uppercase;">MÁQUINAS PARADAS</div>
                    <div id="num-maquinas-paradas" style="color: #ff4444; font-size: 28px; font-weight: bold;">3</div>
                </div>
                
                <div id="maquinas-paradas-scroll" style="flex-grow: 1; height: 40px; border: 1px solid #ff4444; border-radius: 4px; background: rgba(0,0,0,0.4); overflow-y: auto;">
                </div>

                <div style="text-align: right; min-width: 120px;">
                    <div style="color: #a1b1c1; font-size: 9px; margin-bottom: 3px;">(Fecha Act.: 27-feb-2026)</div>
                    <button style="background: transparent; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 3px 10px; font-size: 10px; font-weight: bold; cursor: pointer;">DETALLES CARDAS</button>
                </div>
            </div>
        </div>`;
    },

    crearBloque: function(titulo, valor, unidad, id) {
        return `
        <div style="width: 150px; background: rgba(0,0,0,0.2); border-left: 3px solid #f9b218; padding: 2px 10px; height: 48px; display: flex; flex-direction: column; justify-content: center;">
            <div style="color: #a1b1c1; font-size: 9px; font-weight: bold; text-transform: uppercase;">${titulo}</div>
            <div style="display: flex; align-items: baseline; gap: 5px;">
                <span id="${id}" style="color: #f9b218; font-size: 22px; font-weight: bold; line-height: 1;">${valor}</span>
                <span style="color: #a1b1c1; font-size: 10px;">${unidad}</span>
            </div>
        </div>`;
    }
};
