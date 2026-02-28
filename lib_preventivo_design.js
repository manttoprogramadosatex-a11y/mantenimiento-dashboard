const SatexPreventivoDesign = {
    render: function(id, porcentaje) {
        const container = document.getElementById(id);
        if (!container) return;

        // Estructura: Izquierda (Dona) | Derecha (Botones actualizados)
        container.innerHTML = `
        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 10px; box-sizing: border-box;">
            
            <div style="width: 45%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-top: 4px;">
                <div style="position: relative; width: 140px; height: 140px;">
                    <canvas id="canvas-preventivo" width="140" height="140"></canvas>
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 24px; font-family: 'Segoe UI', sans-serif;">
                        ${porcentaje}%
                    </div>
                </div>
                <div style="color: #a1b1c1; font-size: 11px; font-weight: bold; margin-top: 5px; text-transform: uppercase; letter-spacing: 1.2px; text-align: center;">
                    Cumplimiento Acumulado
                </div>
            </div>

            <div style="width: 50%; height: 90%; display: flex; flex-direction: column; justify-content: space-around; padding-left: 15px; border-left: 1px solid rgba(255,255,255,0.1);">
                
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <button style="width: 100%; background: #2f5577; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 6px; font-size: 12px; font-weight: bold; cursor: pointer; text-transform: uppercase; margin-bottom: 5px;">
                        Preventivos Hoy
                    </button>
                    <div style="color: #f9b218; font-size: 32px; font-weight: bold; font-family: 'Segoe UI', sans-serif;">55</div>
                </div>

                <div style="display: flex; flex-direction: column; align-items: center;">
                    <button style="width: 100%; background: #2f5577; color: white; border: 1px solid #ff9999; border-radius: 4px; padding: 6px; font-size: 11px; font-weight: bold; cursor: pointer; text-transform: uppercase; margin-bottom: 5px;">
                        Preventivos antes de hoy
                    </button>
                    <div style="color: #ff9999; font-size: 32px; font-weight: bold; font-family: 'Segoe UI', sans-serif;">20</div>
                </div>

            </div>
        </div>`;

        this.dibujarCirculo(porcentaje);
    },

    dibujarCirculo: function(porcentaje) {
        const canvas = document.getElementById('canvas-preventivo');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        const radio = 60; 

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x, y, radio, 0, 2 * Math.PI);
        ctx.lineWidth = 14; 
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.stroke();

        const finAngulo = (porcentaje / 100) * (2 * Math.PI) - Math.PI / 2;
        ctx.beginPath();
        ctx.arc(x, y, radio, -Math.PI / 2, finAngulo);
        ctx.lineWidth = 14;
        ctx.strokeStyle = '#4caf50';
        ctx.lineCap = 'round';
        ctx.stroke();
    }
};
