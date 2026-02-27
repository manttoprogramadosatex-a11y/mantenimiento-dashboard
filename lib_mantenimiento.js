/**
 * Librería: lib_mantenimiento.js
 * Objetivo: Gestionar la sección inferior con división clara y títulos blancos centrados.
 */
const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
            <div style="display: flex; width: 100%; flex-grow: 1; margin-top: 8px; position: relative; font-family: 'Segoe UI', sans-serif;">
                
                <div style="position: absolute; left: 50%; top: 0; bottom: 20px; width: 3px; background-color: #f9b218; transform: translateX(-50%); z-index: 5; box-shadow: 0 0 5px rgba(0,0,0,0.5);"></div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; padding-top: 10px;">
                    <div style="color: #ffffff; font-size: 20px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 5px; width: 80%; text-align: center; text-transform: uppercase; letter-spacing: 1px;">
                        Mantto. Correctivo
                    </div>
                    </div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; padding-top: 10px;">
                    <div style="color: #ffffff; font-size: 20px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 5px; width: 80%; text-align: center; text-transform: uppercase; letter-spacing: 1px;">
                        Mantto. Preventivo
                    </div>
                    </div>
            </div>
        `;
    }
};
