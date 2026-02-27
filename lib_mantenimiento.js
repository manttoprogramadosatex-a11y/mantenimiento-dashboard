/**
 * Librería: lib_mantenimiento.js
 * Objetivo: Gestionar la sección inferior de mantenimientos con división visual.
 */
const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
            <div style="display: flex; width: 100%; flex-grow: 1; margin-top: 8px; position: relative; font-family: 'Segoe UI', sans-serif;">
                <div style="position: absolute; left: 50%; top: 0; bottom: 20px; width: 2px; background-color: #da291c; transform: translateX(-50%); opacity: 0.8; z-index: 5;"></div>
                
                <div style="flex: 1; padding-left: 20px; display: flex; flex-direction: column;">
                    <div style="color: #f9b218; font-size: 18px; font-weight: bold; border-bottom: 1px solid rgba(249, 178, 24, 0.3); padding-bottom: 5px; width: fit-content; margin-bottom: 10px;">
                        Mantto. Correctivo
                    </div>
                    </div>
                
                <div style="flex: 1; padding-left: 40px; display: flex; flex-direction: column;">
                    <div style="color: #f9b218; font-size: 18px; font-weight: bold; border-bottom: 1px solid rgba(249, 178, 24, 0.3); padding-bottom: 5px; width: fit-content; margin-bottom: 10px;">
                        Mantto. Preventivo
                    </div>
                    </div>
            </div>
        `;
    }
};
