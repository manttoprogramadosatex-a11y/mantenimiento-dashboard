const SatexHeaderDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        
        container.innerHTML = `
        <div style="background-color: #1a3a5a; color: white; padding: 5px 20px; border-bottom: 2px solid #f9b218; display: flex; align-items: center; justify-content: space-between; font-family: Calibri, 'Segoe UI', sans-serif; height: 50px;">
            
            <div style="flex: 0 0 200px; display: flex; align-items: center;">
                <img src="logo.png.jpeg" alt="SATEXTEXTIL" style="height: 35px; width: auto; border: 1px solid rgba(255,255,255,0.2);">
            </div>

            <div style="flex-grow: 1; text-align: center;">
                <h1 style="margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 0.5px; text-transform: uppercase; white-space: nowrap;">
                    TABLERO MASTER MANTTO. SATEX TEXTIL HILATURA
                </h1>
            </div>

            <div style="flex: 0 0 200px; text-align: right; color: #ff8c69; font-size: 18px; font-weight: bold; text-transform: uppercase;">
                28 FEB 2026
            </div>
        </div>`;
    }
};
