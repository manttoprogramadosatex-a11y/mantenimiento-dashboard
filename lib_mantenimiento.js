const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
            <div style="display: flex; width: 100%; flex-grow: 1; position: relative; font-family: 'Segoe UI', sans-serif; padding-top: 8px;">
                <div style="position: absolute; left: 50%; top: 5px; bottom: 15px; width: 2px; background-color: #f9b218; transform: translateX(-50%); z-index: 5;"></div>
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 4px; width: 80%; text-align: center; text-transform: uppercase;">
                        Mantto. Correctivo
                    </div>
                </div>
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 4px; width: 80%; text-align: center; text-transform: uppercase;">
                        Mantto. Preventivo
                    </div>
                </div>
            </div>
        `;
    }
};
