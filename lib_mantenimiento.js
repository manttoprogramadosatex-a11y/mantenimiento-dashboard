/* lib_mantenimiento.js */
const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        
        container.innerHTML = `
            <div style="display: flex; width: 100%; height: 100%; position: relative; font-family: 'Segoe UI', sans-serif; background-color: #2f5577;">
                
                <div style="position: absolute; left: 50%; top: 0px; bottom: 10px; width: 2px; background-color: #f9b218; transform: translateX(-50%); z-index: 5;"></div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; padding-top: 10px;">
                    <div style="color: #ffffff; font-size: 16px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 85%; text-align: center; text-transform: uppercase;">
                        Mantto. Correctivo
                    </div>
                </div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; position: relative; padding-top: 10px;">
                    <div style="color: #ffffff; font-size: 16px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 85%; text-align: center; text-transform: uppercase;">
                        Mantto. Preventivo
                    </div>
                    
                    <div id="titulo-accidentes" style="position: absolute; bottom: 85px; left: 50%; transform: translateX(-50%); color: #ff9999; font-size: 13px; font-weight: bold; border-bottom: 1px solid #ff9999; padding-bottom: 2px; width: 80%; text-align: center; text-transform: uppercase;">
                        Accidentes
                    </div>

                    <div id="accidentes-scroll" style="position: absolute; bottom: 15px; left: 5%; width: 90%; height: 60px; background: rgba(0,0,0,0.3); border-radius: 4px; padding: 5px; box-sizing: border-box; overflow: hidden; border: 1px solid rgba(255,153,153,0.3);">
                        </div>
                </div>
            </div>`;
    }
};
