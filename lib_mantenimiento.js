/* lib_mantenimiento.js */
/* VERSION 1.3.3
   - Ajuste real vertical del título "ACCIDENTES"
   - No modifica alturas generales
   - No altera layout
*/

const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
  
        container.innerHTML = `
        <div style="display: flex; width: 100%; height: 100%; position: relative; font-family: 'Segoe UI', sans-serif;">
            
            <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background-color: #f9b218; transform: translateX(-50%); z-index: 5;"></div>
            
            <!-- COLUMNA IZQUIERDA -->
            <div style="flex: 1; display: flex; flex-direction: column; padding: 0px 15px 5px 15px;">
                
                <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 100%; text-align: center; text-transform: uppercase; margin-bottom: 6px;">
                    Mantto. Correctivo
                </div>
                
                <div style="display: flex; width: 100%; height: 160px; gap: 10px; margin-bottom: 8px;">
                    <div style="width: 50%; display: flex; gap: 5px;">
                        <div id="pmc-diario-container" style="flex: 1;"></div>
                        <div id="pmc-mensual-container" style="flex: 1;"></div>
                    </div>
                    <div id="kpis-correctivo-container" style="width: 50%;"></div>
                </div>

                <div style="display: flex; width: 100%; gap: 8px; margin-bottom: 8px;">
                    ${this.btn("CORRECTIVOS PROGRAMADOS", "#f9b218")}
                    ${this.btn("CORRECTIVOS A EDIFICIOS", "#00bcd4")}
                    ${this.btn("BITÁCORA DE OS", "#ffffff")}
                </div>

                <div style="margin-top: auto; padding-bottom: 5px;">
                    
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <div style="color: #f9b218; font-size: 12px; font-weight: bold; border-bottom: 1px solid #f9b218; width: 48%; text-align: center;">
                            DETS. PERSONAL MANTTO.
                        </div>
                        <div style="color: #f9b218; font-size: 12px; font-weight: bold; border-bottom: 1px solid #f9b218; width: 48%; text-align: center;">
                            PENDIENTES COMPRAS
                        </div>
                    </div>

                    <div style="display: flex; justify-content: space-between; height: 75px;">
                        <div id="personal-mantto-scroll" style="width: 48%; background: rgba(0,0,0,0.2); border-radius: 4px; overflow-y: auto;"></div>
                        <div id="compras-pendientes-scroll" style="width: 48%; background: rgba(0,0,0,0.2); border-radius: 4px; overflow-y: auto;"></div>
                    </div>

                </div>
            </div>

            <!-- COLUMNA DERECHA -->
            <div style="flex: 1; display: flex; flex-direction: column; padding: 0px 15px 5px 15px;">
                
                <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 100%; text-align: center; text-transform: uppercase; margin-bottom: 6px;">
                    Mantto. Preventivo
                </div>
                
                <div id="preventivos-grafico-container" style="width: 100%; height: 180px;"></div>
                
                <!-- BLOQUE INFERIOR -->
                <div style="margin-top: auto; padding-top: 8px; padding-bottom: 10px;">
                    
                    <div style="
                        color: #ff9999;
                        font-size: 14px;
                        font-weight: bold;
                        border-bottom: 1px solid #ff9999;
                        text-align: center;
                        margin-bottom: 5px;
                        text-transform: uppercase;
                    ">
                        Accidentes
                    </div>

                    <div id="accidentes-scroll" style="height: 75px; background: rgba(0,0,0,0.2); border-radius: 4px; overflow-y: auto;"></div>
                </div>
            </div>

        </div>`;
    },

    btn: function(t, c) {
        return `
        <button style="
            flex: 1;
            height: 32px;
            background: #2f5577;
            color: white;
            border: 1px solid ${c};
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
            text-transform: uppercase;
            transition: 0.1s;
        "
        onmousedown="this.style.transform='scale(0.97)'"
        onmouseup="this.style.transform='scale(1)'">
            ${t}
        </button>`;
    }
};
