const SatexPreventivoDesign = {
    render: function(id, porcentaje) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 5px; box-sizing: border-box; font-family: 'Segoe UI', sans-serif;">
            
            <div style="width: 30%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <div style="position: relative; width: 110px; height: 110px;">
                    <canvas id="canvas-preventivo" width="110" height="110"></canvas>
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 18px;">
                        ${porcentaje}%
                    </div>
                </div>
                <div style="color: #a1b1c1; font-size: 8px; font-weight: bold; margin-top: 5px; text-transform: uppercase; text-align: center; line-height: 1;">
                    Cumplimiento Acumulado
                </div>
            </div>

            <div style="width: 68%; height: 95%; display: flex; flex-direction: column; justify-content: space-between; padding-left: 8px; border-left: 1px solid rgba(255,255,255,0.1);">
                ${this.btn("Preventivos Hoy", "55", "#f9b218")}
                ${this.btn("Prev. pendientes antes hoy", "20", "#ff9999")}
                ${this.btn("Preventivos Extraordinarios", "03", "#ffffff")} 
                ${this.btn("Mantto. Diciembre", "12", "#4caf50")}
                ${this.btn("Mantto. Abril", "8", "#00bcd4")}
                ${this.btn("Mantto. D. Festivos", "5", "#e91e63")}
            </div>
        </div>`;

        this.dibujarCirculo(porcentaje);
    },

    // Función con altura de botón reducida (14%)
    btn: function(t, v, c) {
        return `
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(0,0,0,0.15); padding: 1px 5px; border-radius: 3px; height: 14%;">
            <button style="width: 80%; height: 85%; background: #2f5577; color: white; border: 1px solid ${c}; border-radius: 3px; font-size: 8.5px; font-weight: bold; text-transform: uppercase; cursor: pointer; line-height: 1; padding: 0 3px;"
                onmousedown="this.style.transform='scale(0.96)'"
                onmouseup="this.style.transform='scale(1)'">
                ${t}
            </button>
            <div style="width: 18%; color: ${c}; font-size: 15px; font-weight: bold; font-family: 'Segoe UI', sans-serif; text-align: right;">
                ${v}
            </div>
        </div>`;
    },

    dibujarCirculo: function(p) {
        const canvas = document.getElementById('canvas-preventivo');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const x = 55, y = 55, radio = 45;

        ctx.clearRect(0, 0, 110, 110);
        ctx.beginPath();
        ctx.arc(x, y, radio, 0, 2 * Math.PI);
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, radio, -Math.PI / 2, (p / 100) * (2 * Math.PI) - Math.PI / 2);
        ctx.strokeStyle = '#4caf50';
        ctx.lineCap = 'round';
        ctx.stroke();
    }
};
