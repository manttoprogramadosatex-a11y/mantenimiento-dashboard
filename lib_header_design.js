const SatexHeaderDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        
        container.innerHTML = `
        <div style="background-color: #1a3a5a; color: white; padding: 8px 20px; border-bottom: 2px solid #f9b218; display: flex; align-items: center; font-family: Calibri, sans-serif;">
            <div style="flex: 0 0 180px;">
                <img src="logo.png.jpeg" alt="SATEXTEXTIL" style="height: 40px; border: 1px solid rgba(255,255,255,0.3);">
            </div>

            <div style="flex-grow: 1; text-align: center;">
                <h1 style="margin: 0; font-size: 26px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">
                    TABLERO MASTER MANTTO. SATEX TEXTIL HILATURA
                </h1>
            </div>

            <div style="flex: 0 0 180px; text-align: right; color: #ff8c69; font-size: 18px; font-weight: bold;">
                28 FEB 2026
            </div>
        </div>`;
    }
};
