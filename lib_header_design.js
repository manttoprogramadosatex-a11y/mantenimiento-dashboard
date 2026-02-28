const SatexHeaderDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        
        container.innerHTML = `
        <div style="background-color: #1a3a5a; color: white; padding: 10px 30px; border-bottom: 2px solid #f9b218; display: flex; justify-content: space-between; align-items: center; position: relative;">
            <div style="width: 150px;">
                <img src="logo.png.jpeg" alt="Satex Logo" style="height: 50px; object-fit: contain;">
            </div>

            <div style="flex-grow: 1; text-align: center;">
                <h1 style="margin: 0; font-size: 32px; text-transform: uppercase; letter-spacing: 5px; font-family: 'Comic Sans MS', cursive, sans-serif; font-style: italic;">
                    SATEX MASTER PROJECT - HILATURA
                </h1>
            </div>

            <div style="width: 150px; text-align: right; font-weight: bold; font-size: 14px;">
                28-feb-2026
            </div>
        </div>`;
    }
};
