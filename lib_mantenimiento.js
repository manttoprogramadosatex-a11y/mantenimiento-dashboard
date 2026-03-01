/* lib_mantenimiento.js */
/* VERSION 1.4
   - Aumento proporcional altura botones preventivos
   - Ajuste leve de espaciado
   - Se alinea visualmente con botones correctivos
   - No altera layout global
*/

const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
  
        container.innerHTML = `
        <div style="display: flex; width: 100%; height: 100%; position: relative; font-family: 'Segoe UI', sans-serif;">
            
            <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background-color: #f9b218; transform: translateX(-50%); z-index: 5;"></div>
            
            <!-- ===================== -->
            <!-- LADO IZQUIERDO -->
            <!-- ===================== -->
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

            <!-- ===================== -->
            <!-- LADO DERECHO -->
            <!-- ===================== -->
            <div style="flex: 1; display: flex; flex-direction: column; padding: 0px 15px 5px 15px;">
                
                <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 100%; text-align: center; text-transform: uppercase; margin-bottom: 6px;">
                    Mantto. Preventivo
                </div>
                
                <!-- 🔥 Ajuste altura gráfico -->
                <div id="preventivos-grafico-container" style="width: 100%; height: 170px; margin-bottom: 8px;"></div>
                
                <!-- 🔥 Botones preventivos aumentados -->
                <div style="display: flex; flex-direction: column; gap: 6px;">
                    ${this.btnPrev("PREVENTIVOS HOY", "55", "#f9b218")}
                    ${this.btnPrev("PREV. PENDIENTES ANTES HOY", "20", "#ff6f61")}
                    ${this.btnPrev("PREVENTIVOS EXTRAORDINARIOS", "03", "#ffffff")}
                    ${this.btnPrev("MANTTO. DICIEMBRE", "12", "#4caf50")}
                    ${this.btnPrev("MANTTO. ABRIL", "8", "#00bcd4")}
                    ${this.btnPrev("MANTTO. D. FESTIVOS", "5", "#e91e63")}
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
        ">
            ${t}
        </button>`;
    },

    btnPrev: function(texto, valor, color) {
        return `
        <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            height:30px; /* 🔥 antes ~24px */
            padding:0 10px;
            border:1px solid ${color};
            border-radius:4px;
            font-size:13px;
            font-weight:bold;
            color:white;
        ">
            <span>${texto}</span>
            <span style="color:${color};">${valor}</span>
        </div>`;
    }
};
