/* lib_mantenimiento.js */
const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        
        // Configuramos el contenedor para que sea flexible y no empuje las carátulas
        container.style.marginTop = "0px";
        container.style.paddingTop = "0px";
        container.style.flexGrow = "1"; 
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.minHeight = "0"; // Permite que se ajuste al espacio sobrante

        container.innerHTML = `
            <div style="display: flex; width: 100%; height: 100%; position: relative; font-family: 'Segoe UI', sans-serif; margin-top: 4px;">
                
                <div style="position: absolute; left: 50%; top: 0px; bottom: 15px; width: 2px; background-color: #f9b218; transform: translateX(-50%); z-index: 5;"></div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 85%; text-align: center; text-transform: uppercase;">
                        Mantto. Correctivo
                    </div>
                </div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    
                    <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 85%; text-align: center; text-transform: uppercase;">
                        Mantto. Preventivo
                    </div>
                    
                    <div style="height: 283px; min-height: 20px;"></div>
                    
                    <div style="color: #ff9999; font-size: 14px; font-weight: bold; border-bottom: 1px solid #ff9999; padding-bottom: 2px; width: 70%; text-align: center; text-transform: uppercase;">
                        Accidentes
                    </div>
                    
                </div>
            </div>`;
    }
};
