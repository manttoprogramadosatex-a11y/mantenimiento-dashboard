const SatexEstatusDesign = {
    render: function(id) {
        document.getElementById(id).innerHTML = `
        <div style="background: rgba(15, 32, 50, 0.9); height: 65px; display: flex; align-items: center; padding: 0 15px; gap: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); box-sizing: border-box;">
            <div style="color: white; min-width: 135px; display: flex; flex-direction: column; justify-content: center; height: 100%;">
                <div style="font-size: 14px; font-weight: bold; margin-bottom: -2px; opacity: 0.9;">Estatus planta  ▶ </div>
                <div style="font-size: 15px; font-weight: bold; color: #a1b1c1; margin-top: 2px;">Info. Cardas  ▼ </div>
            </div>
            <div id="data-husos-container" style="display: flex; gap: 10px;"></div>
            <div id="maquinas-paradas-scroll" class="scroll-paros" style="flex-grow: 1; max-width: 480px; height: 52px; overflow-y: auto; background: rgba(0,0,0,0.2); border: 1px solid #da291c; border-radius: 4px; padding: 2px 12px; margin-left: 15px;"></div>
            <div style="margin-left: auto; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; height: 100%;">
                <span style="color: #a1b1c1; font-size: 10px; font-weight: bold; margin-bottom: 4px; opacity: 0.8;">(Fecha Act.: 27-feb-2026)</span>
                <button style="background: transparent; color: white; border: 1px solid #f9b218; padding: 4px 12px; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold; text-transform: uppercase;">DETALLES CARDAS</button>
            </div>
        </div>`;
    }
};
