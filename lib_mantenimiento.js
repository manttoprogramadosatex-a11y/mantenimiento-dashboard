/* lib_mantenimiento.js */
const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        
        // Estilos para blindar el contenedor de mantenimiento y respetar las cardas
        container.style.marginTop = "0px";
        container.style.paddingTop = "0px";
        container.style.display = "block";
        container.style.width = "100%";
        // Usamos flex-grow en el contenedor principal, no aquí.
        // Aquí aseguramos que tenga una altura mínima para la línea.
        container.style.minHeight = "calc(100vh - 430px)"; 

        container.innerHTML = `
            <div style="display: flex; width: 100%; height: 100%; position: relative; font-family: 'Segoe UI', sans-serif; margin-top: 4px;">
                
                <div style="position: absolute; left: 50%; top: 0px; height: 100vh; width: 2px; background-color: #f9b218; transform: translateX(-50%); z-index: 5;"></div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; border-right: 1px solid rgba(255,255,255,0.05);">
                    <div style="color: #ffffff; font-size: 1.2vw; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 85%; text-align: center; text-transform: uppercase;">
                        Mantto. Correctivo
                    </div>
                </div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; position: relative;">
                    
                    <div style="color: #ffffff; font-size: 1.2vw; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 85%; text-align: center; text-transform: uppercase;">
                        Mantto. Preventivo
                    </div>
                    
                    <div style="position: absolute; top: 283px; left: 50%; transform: translateX(-50%); color: #ff9999; font-size: 0.9vw; font-weight: bold; border-bottom: 1px solid #ff9999; padding-bottom: 2px; width: 70%; text-align: center; text-transform: uppercase; white-space: nowrap;">
                        Accidentes
                    </div>
                    
                </div>
            </div>`;
    }
};
