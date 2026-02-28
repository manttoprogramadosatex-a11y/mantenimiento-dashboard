const SatexHeaderDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        container.innerHTML = `
        <div style="background-color: #1a3a5a; color: white; padding: 10px 20px; border-bottom: 2px solid #f9b218;">
            <div style="text-align: center; margin-bottom: 10px;">
                <h1 style="margin: 0; font-size: 26px; text-transform: uppercase; letter-spacing: 3px;">SATEX MASTER PROJECT - HILATURA</h1>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <span style="color: #a1b1c1; font-size: 14px; font-weight: bold;">MÁQUINAS PARADAS</span>
                    <span style="color: #ff4444; font-size: 32px; font-weight: bold;">3</span>
                </div>
                <div id="maquinas-paradas-scroll" style="flex-grow: 1; margin: 0 30px; height: 45px; border: 1px solid #ff4444; border-radius: 4px; background: rgba(0,0,0,0.3); overflow-y: auto;"></div>
                <div style="text-align: right;">
                    <div style="color: #a1b1c1; font-size: 10px; margin-bottom: 4px;">(Fecha Act.: 27-feb-2026)</div>
                    <button style="background: transparent; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 4px 15px; font-size: 12px; font-weight: bold; cursor: pointer;">DETALLES CARDAS</button>
                </div>
            </div>
        </div>`;
    }
};
