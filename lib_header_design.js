const SatexHeaderDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="background-color: #1a2a3a; color: white; display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; border-bottom: 3px solid #f9b218; height: 60px; font-family: 'Segoe UI', sans-serif;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="background-color: white; padding: 5px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                    <img src="logo.png.jpeg" alt="SATEX" style="height: 40px; width: auto;">
                </div>
                <div style="font-size: 30px; font-weight: 900; letter-spacing: 1px; color: #ffffff;">
                    TABLERO MASTER MANTTO. SATEX TEXTIL HILATURA
                </div>
            </div>
            <div style="text-align: right;">
                <div style="font-size: 20px; font-weight: bold; color: #f9b218;">28 FEB 2026</div>
                <div style="font-size: 13px; color: #a1b1c1; text-transform: uppercase;">Sistema de Monitoreo Real-Time</div>
            </div>
        </div>`;
    }
};
