const SatexPreventivoDesign = {
    render: function(id, porcentaje) {
        const container = document.getElementById(id);
        if (!container) return;

        // Se coloca en la mitad izquierda (float: left) como marcaste en la imagen
        container.innerHTML = `
        <div style="width: 50%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; float: left; box-sizing: border-box;">
            <div style="position: relative; width: 150px; height: 150px;">
                <canvas id="canvas-preventivo" width="150" height="150"></canvas>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 26px; font-family: 'Segoe UI', sans-serif;">
                    ${porcentaje}%
                </div>
            </div>
            <div style="color: #a1b1c1; font-size: 12px; font-weight: bold; margin-top: 8px; text-transform: uppercase; letter-spacing: 1.5px;">Cumplimiento</div>
        </div>`;

        this.dibujarCirculo(porcentaje);
    },

    dibujarCirculo: function(porcentaje) {
        const canvas = document.getElementById('canvas-preventivo');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        const radio = 65; 

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Fondo del anillo
        ctx.beginPath();
        ctx.arc(x, y, radio, 0, 2 * Math.PI);
        ctx.lineWidth = 15; 
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.stroke();

        // Progreso (Verde Satex)
        const finAngulo = (porcentaje / 100) * (2 * Math.PI) - Math.PI / 2;
        ctx.beginPath();
        ctx.arc(x, y, radio, -Math.PI / 2, finAngulo);
        ctx.lineWidth = 15;
        ctx.strokeStyle = '#4caf50';
        ctx.lineCap = 'round';
        ctx.stroke();
    }
};
