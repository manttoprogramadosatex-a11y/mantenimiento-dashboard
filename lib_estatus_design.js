const SatexEstatusDesign = {
    render: function(id) {
        document.getElementById(id).innerHTML = `
            <div style="background: rgba(0,0,0,0.15); height: 50px; display: flex; align-items: center; padding: 0 15px; gap: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                <div style="display: flex; flex-direction: column; justify-content: center; color: white; min-width: 120px;">
                    <div style="font-size: 15px; font-weight: bold; line-height: 1;">Estatus planta <span style="font-size: 10px;">▶</span></div>
                    <div style="font-size: 12px; margin-top: 2px; opacity: 0.9;">Info. Cardas <span style="font-size: 10px;">▼</span></div>
                </div>
                <div id="data-husos-container" style="display: flex; gap: 10px; align-items: center;"></div>
                <div style="margin-left: auto;">
                    <button style="background: transparent; color: white; border: 1px solid #f9b218; padding: 5px 15px; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold; text-transform: uppercase;">
                        DETALLES CARDAS
                    </button>
                </div>
            </div>`;
    }
};
