const SatexHeaderDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        
        container.innerHTML = `
        <div style="background-color: #1a3a5a; color: white; padding: 10px 0; border-bottom: 2px solid #f9b218; display: flex; justify-content: center; align-items: center;">
            <h1 style="margin: 0; font-size: 28px; text-transform: uppercase; letter-spacing: 4px; font-weight: bold;">
                SATEX MASTER PROJECT - HILATURA
            </h1>
        </div>`;
    }
};
