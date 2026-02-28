const SatexHeaderDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        
        container.innerHTML = `
        <div style="background-color: #1a3a5a; color: white; padding: 0 20px; border-bottom: 2px solid #f9b218; display: flex; align-items: center; justify-content: space-between; font-family: Calibri, sans-serif; height: 60px;">
            
            <div style="flex: 0 0 220px; display: flex; align-items: center;">
                <img src="logo.png.jpeg" alt="SATEXTEXTIL" style="height: 45px; width: auto;">
            </div>

            <div style="flex-grow: 1; text-align: center;">
                <h1 style="margin: 0; font-size: 28px; font-weight: bold; letter-spacing: 0.5px; text-transform: uppercase;">
                    TABLERO MASTER MANTTO. SATEX TEXTIL HILATURA
                </h1>
            </div>

            <div style="flex: 0 0 220px; text-align: right; color: #ff8c69; font-size: 20px; font-weight: bold;">
                28 FEB 2026
            </div>
        </div>`;
    }
};
