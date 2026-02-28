/* lib_mantenimiento.js */
const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        
        // Blindaje para que el contenedor tenga altura y la línea sea visible
        container.style.marginTop = "0px";
        container.style.paddingTop = "0px";
        container.style.minHeight = "150px"; // Asegura espacio para la línea y nuevos títulos

        container.innerHTML = `
            <div style="display: flex; width: 100%; height: 100%; position: relative; font-family: 'Segoe UI', sans-serif; margin-top: 4px;">
                
                <div style="position: absolute; left: 50%; top: 0px; height: 120px; width: 2px; background-color: #f9b218; transform: translateX(-50%); z-index: 5;"></div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 85%; text-align: center; text-transform: uppercase;">
                        Mantto. Correctivo
                    </div>
                </div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 15px;">
                    
                    <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 85%; text-align: center; text-transform: uppercase;">
                        Mantto. Preventivo
                    </div>
                    
                    <div style="color: #ff9999; font-size: 14px; font-weight: bold; border-bottom: 1px solid #ff9999; padding-bottom: 2px; width: 70%; text-align: center; text-transform: uppercase; margin-top: 5px;">
                        Accidentes
                    </div>
                    
                </div>
            </div>`;
    }
};
