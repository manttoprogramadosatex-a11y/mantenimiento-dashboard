const SatexHeaderDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        
        container.innerHTML = `
        <div style="background-color: #1a3a5a; color: white; padding: 5px 20px; border-bottom: 2px solid #f9b218; display: flex; flex-direction: column; gap: 5px;">
            <div style="display: flex; justify-content: center; align-items: center; position: relative;">
                <h1 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Satex Master Project - Hilatura</h1>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.2); padding: 5px 10px; border-radius: 4px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="color: #a1b1c1; font-size: 12px; font-weight: bold; text-transform: uppercase;">Máquinas Paradas</div>
                    <div style="color: #ff4444; font-size: 28px; font-weight: bold; line-height: 1;">3</div>
                </div>

                <div id="maquinas-paradas-scroll" style="flex-grow: 1; margin: 0 20px; height: 40px; border: 1px solid #ff4444; border-radius: 4px; background: rgba(0,0,0,0.4); overflow-y: auto;">
                </div>

                <div style="text-align: right;">
                    <div style="color: #a1b1c1; font-size: 10px; margin-bottom: 2px;">(Fecha Act.: 27-feb-2026)</div>
                    <button style="background: transparent; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 2px 10px; font-size: 12px; font-weight: bold; cursor: pointer; text-transform: uppercase;">
                        Detalles Cardas
                    </button>
                </div>
            </div>
        </div>`;
    }
};
