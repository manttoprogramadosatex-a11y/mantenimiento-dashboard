/* lib_mantenimiento.js */
const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        
        container.innerHTML = `
            <div style="width: 100%; height: 100%; display: flex; position: relative; color: white;">
                
                <div style="position: absolute; left: 50%; top: 5px; bottom: 5px; width: 2px; background: #f9b218; transform: translateX(-50%);"></div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; padding-top: 5px;">
                    <div style="width: 90%; text-align: center; border-bottom: 2px solid #f9b218; font-weight: bold; font-size: 1.1rem; text-transform: uppercase;">
                        Mantto. Correctivo
                    </div>
                </div>
                
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center; padding-top: 5px; position: relative;">
                    <div style="width: 90%; text-align: center; border-bottom: 2px solid #f9b218; font-weight: bold; font-size: 1.1rem; text-transform: uppercase;">
                        Mantto. Preventivo
                    </div>

                    <div style="position: absolute; bottom: 85px; width: 80%; text-align: center; color: #ff9999; font-weight: bold; border-bottom: 1px solid #ff9999; font-size: 0.9rem;">
                        ACCIDENTES
                    </div>

                    <div id="accidentes-scroll" style="position: absolute; bottom: 10px; width: 90%; height: 70px; background: rgba(0,0,0,0.3); border-radius: 4px; overflow: hidden; padding: 2px; border: 1px solid rgba(255,255,255,0.1);">
                    </div>
                </div>
            </div>`;
    }
};
