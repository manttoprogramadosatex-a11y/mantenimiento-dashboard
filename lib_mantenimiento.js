/* lib_mantenimiento.js */
/* VERSION 2.6
   - Botón "BITÁCORA DE OS" vinculado a pestaña específica (gid=0)
   - Mantiene botón "Cat. Cambios de Titulo" con su vínculo
   - No se altera la estructura visual ni se quita código previo
*/

const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id || "mantenimiento-container");
        if (!container) return;

        container.innerHTML = `
        <div style="display: flex; width: 100%; height: 100%; position: relative; font-family: 'Segoe UI', sans-serif;">
            
            <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background-color: #f9b218; transform: translateX(-50%); z-index: 5;"></div>
            
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

                <div style="display: flex; width: 100%; gap: 8px; margin-bottom: 6px;">
                    ${this.btn("CORRECTIVOS PROGRAMADOS", "#f9b218", "")}
                    ${this.btn("CORRECTIVOS A EDIFICIOS", "#00bcd4", "")}
                    ${this.btn("BITÁCORA DE OS", "#ffffff", "accionBitacoraOS()")}
                </div>

                <div style="display: flex; width: 100%; justify-content: center; margin-bottom: 2px;">
                    ${this.btnExtra("Cat. Cambios de Titulo", "#f9b218", "accionCatCambiosTitulo()")}
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

            <div style="flex: 1; display: flex; flex-direction: column; padding: 0px 15px 5px 15px;">
                <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 100%; text-align: center; text-transform: uppercase; margin-bottom: 6px;">
                    Mantto. Preventivo
                </div>
                <div id="preventivos-grafico-container" style="width: 100%; height: 180px;"></div>
                <div style="margin-top: auto; padding-bottom: 10px;">
                    <div style="color: #ff9999; font-size: 14px; font-weight: bold; border-bottom: 1px solid #ff9999; text-align: center; margin-top: 4px; margin-bottom: 5px; text-transform: uppercase;">
                        Accidentes
                    </div>
                    <div id="accidentes-scroll" style="height: 75px; background: rgba(0,0,0,0.2); border-radius: 4px; overflow-y: auto;"></div>
                </div>
            </div>

        </div>`;
    },

    btn: function(t, c, onclick) {
        return `
        <button onclick="${onclick}" style="flex: 1; height: 30px; background: #2f5577; color: white; border: 1px solid ${c}; border-radius: 4px; font-size: 10px; font-weight: bold; cursor: pointer; text-transform: uppercase; transition: 0.1s; white-space: nowrap;"
        onmousedown="this.style.transform='scale(0.97)'" onmouseup="this.style.transform='scale(1)'">
            ${t}
        </button>`;
    },

    btnExtra: function(t, c, onclick) {
        return `
        <button onclick="${onclick}" style="width: auto; padding: 0 15px; height: 22px; background: #2f5577; color: white; border: 1px solid ${c}; border-radius: 4px; font-size: 10px; font-weight: bold; cursor: pointer; text-transform: uppercase; transition: 0.1s; white-space: nowrap;"
        onmousedown="this.style.transform='scale(0.97)'" onmouseup="this.style.transform='scale(1)'">
            ${t}
        </button>`;
    }
};

/* ================= FUNCIONES DE ACCIÓN ================= */

function accionBitacoraOS() {
    window.open("https://docs.google.com/spreadsheets/d/1DkFDe1cwp4hQjm4ip4Z8ZzEAPgiMY8e8qQMRMt2HHBU/edit?gid=0#gid=0", "_blank");
}

function accionCatCambiosTitulo() {
    window.open("https://docs.google.com/spreadsheets/d/1q6Mc7f2K8zBNYmNVBfNkuWURJyz1d5BPxy5SUeQPtvs/edit?usp=sharing", "_blank");
}
