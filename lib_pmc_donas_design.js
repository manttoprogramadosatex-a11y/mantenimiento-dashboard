/* lib_pmc_donas_design.js */
/* VERSION 1.2 
   - Ajuste leve tamaño texto "Max. H."
   - Sin modificar proporciones generales
*/

const SatexPMCDonasDesign = {
    render: function(idDiario, idMensual, valD, maxD, valM, maxM) {
        this.dibujarDona(idDiario, "PMC DIARIO", valD, maxD, "Max. H. D");
        this.dibujarDona(idMensual, "PMC MENSUAL", valM, maxM, "Max. H. M");
    },

    dibujarDona: function(id, titulo, actual, maximo, etiquetaMax) {
        const container = document.getElementById(id);
        if (!container) return;

        const porcentaje = (actual / maximo) * 100;
        let colorSemaforo = "#4caf50";
        if (porcentaje > 80 && porcentaje <= 95) colorSemaforo = "#f9b218";
        if (porcentaje > 95) colorSemaforo = "#f44336";

        container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; width: 100%; position: relative;">
            
            <div style="color: white; font-size: 12px; font-weight: bold; margin-bottom: 6px;">
                ${titulo}
            </div>

            <div style="position: relative; width: 100px; height: 100px;">
                <canvas id="canvas-${id}" width="100" height="100"></canvas>
                <div style="position: absolute; top: 45%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                    <div style="color: white; font-size: 20px; font-weight: bold;">
                        ${actual}
                    </div>
                    <div style="color: #a1b1c1; font-size: 10px;">
                        HORAS
                    </div>
                </div>
            </div>

            <!-- 🔥 Ajuste leve aquí -->
            <div style="
                background: rgba(0,0,0,0.3);
                padding: 4px 12px;
                border-radius: 12px;
                margin-top: 6px;
                border: 1px solid #f9b218;
            ">
                <span style="
                    color: #f9b218;
                    font-size: 11px;
                    font-weight: bold;
                    letter-spacing: 0.3px;
                ">
                    ${etiquetaMax} ${maximo}
                </span>
            </div>

        </div>`;

        this.generarTrazo(id, porcentaje, colorSemaforo);
    },

    generarTrazo: function(id, p, color) {
        const canvas = document.getElementById(`canvas-${id}`);
        const ctx = canvas.getContext('2d');
        const x = 50, y = 50, radio = 40;

        ctx.clearRect(0, 0, 100, 100);

        ctx.beginPath();
        ctx.arc(x, y, radio, 0.8 * Math.PI, 0.2 * Math.PI);
        ctx.lineWidth = 8;
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        ctx.stroke();

        const finP = 0.8 * Math.PI + (Math.min(p, 120) / 120) * (1.4 * Math.PI);
        ctx.beginPath();
        ctx.arc(x, y, radio, 0.8 * Math.PI, finP);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';
        ctx.stroke();
    }
};
