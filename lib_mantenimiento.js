/* lib_mantenimiento.js */
const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        
        container.innerHTML = `
            <div style="display: flex; width: 100%; height: 100%; position: relative;">
                
                <div style="position: absolute; left: 50%; top: 5px; bottom: 20px; width: 2px; background: #f9b218; transform: translateX(-50%);"></div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; padding-top: 10px;">
                    <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; width: 85%; text-align: center; text-transform: uppercase;">
                        Mantto. Correctivo
                    </div>
                </div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; position: relative; padding-top: 10px;">
                    <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; width: 85%; text-align: center; text-transform: uppercase;">
                        Mantto. Preventivo
                    </div>
                    
                    <div id="titulo-accidentes" style="position: absolute; bottom: 85px; left: 50%; transform: translateX(-50%); color: #ff9999; font-size: 14px; font-weight: bold; border-bottom: 1px solid #ff9999; width: 70%; text-align: center;">
                        ACCIDENTES
                    </div>

                    <div id="accidentes-scroll" style="position: absolute; bottom: 10px; left: 5%; width: 90%; height: 70px; background: rgba(0,0,0,0.3); border-radius: 4px; overflow: hidden; border: 1px solid rgba(255,153,153,0.3);">
                    </div>
                </div>
            </div>`;
    }
};
