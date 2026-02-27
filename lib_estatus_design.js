const SatexEstatusDesign = {
    render: function(id) {
        document.getElementById(id).innerHTML = `
            <div style="background: rgba(30, 60, 90, 0.8); border-bottom: 2px solid rgba(255,255,255,0.1); padding: 10px 15px; display: flex; align-items: center; gap: 20px; flex-wrap: nowrap; min-height: 80px;">
                <div style="color: white; font-family: sans-serif; min-width: 130px;">
                    <div style="font-size: 17px; font-weight: bold; margin-bottom: 2px;">Estatus planta <span style="font-size: 12px;">▶</span></div>
                    <div style="font-size: 13px; opacity: 0.8;">Info. Cardas <span style="font-size: 11px;">▼</span></div>
                </div>

                <div id="data-husos-container" style="display: flex; gap: 12px; align-items: center;"></div>

                <div id="maquinas-inactivas-container" style="flex-grow: 1; max-width: 400px; margin: 0 15px;"></div>

                <div style="margin-left: auto;">
                    <button style="background: transparent; color: white; border: 1px solid #f9b218; padding: 6px 15px; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold; white-space: nowrap;">
                        DETALLES CARDAS
                    </button>
                </div>
            </div>`;
    }
};
