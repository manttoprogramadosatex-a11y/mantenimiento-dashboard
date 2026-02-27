const SatexEstatusDesign = {
    render: function(id) {
        document.getElementById(id).innerHTML = `
            <div style="background: rgba(15, 32, 50, 0.9); height: 65px; display: flex; align-items: center; padding: 0 15px; gap: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); box-sizing: border-box;">
                <div style="color: white; min-width: 115px;">
                    <div style="font-size: 14px; font-weight: bold;">Estatus planta ▶</div>
                    <div style="font-size: 11px; opacity: 0.7;">Info. Cardas ▼</div>
                </div>
                
                <div id="data-husos-container" style="display: flex; gap: 10px;"></div>
                
                <div id="maquinas-paradas-scroll" class="scroll-paros" style="flex-grow: 1; max-width: 450px; height: 52px; overflow-y: auto; background: rgba(0,0,0,0.2); border: 1px solid #da291c; border-radius: 4px; padding: 2px 10px; margin-left: 10px;">
                </div>

                <div style="margin-left: auto;">
                    <button style="background: transparent; color: white; border: 1px solid #f9b218; padding: 5px 12px; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold; text-transform: uppercase;">
                        DETALLES CARDAS
                    </button>
                </div>
            </div>`;
    }
};
