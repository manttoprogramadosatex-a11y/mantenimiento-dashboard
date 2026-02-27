const SatexEstatusDesign = {
    render: function(id) {
        document.getElementById(id).innerHTML = `
            <div style="background: rgba(0,0,0,0.15); height: 65px; display: flex; align-items: center; padding: 0 15px; gap: 10px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                <div style="display: flex; flex-direction: column; justify-content: center; color: white; font-family: sans-serif; min-width: 110px;">
                    <div style="font-size: 16px; font-weight: bold; display: flex; align-items: center; line-height: 1;">
                        Estatus planta <span style="font-size: 10px; margin-left: 5px;">▶</span>
                    </div>
                    <div style="font-size: 13px; font-weight: normal; display: flex; align-items: center; margin-top: 4px; opacity: 0.9;">
                        Info. Cardas <span style="font-size: 10px; margin-left: 5px;">▼</span>
                    </div>
                </div>

                <div id="data-husos-container" style="display: flex; gap: 8px; align-items: center;"></div>
                
                <div style="margin-left: auto; display: flex; gap: 10px; align-items: center;">
                    <button style="background: #3c546d; color: white; border: 1px solid #f9b218; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold;">DETALLES CARDAS</button>
                    <button style="background: #da291c; color: white; border: none; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; font-weight: bold;" onclick="location.reload()">X</button>
                </div>
            </div>`;
    }
};
