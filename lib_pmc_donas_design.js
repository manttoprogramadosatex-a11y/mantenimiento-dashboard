const SatexPMCDonasDesign = {
    render: function(idDiario, idMensual, valD, maxD, valM, maxM) {
        this.dibujarDona(idDiario, "PMC DIARIO", valD, maxD, "Max. H. D");
        this.dibujarDona(idMensual, "PMC MENSUAL", valM, maxM, "Max. H. M");
    },

    dibujarDona: function(id, titulo, actual, maximo, etiquetaMax) {
        const container = document.getElementById(id);
        if (!container) return;

        const porcentaje = (actual / maximo) * 100;
        let colorSemaforo = "#4caf50"; // Verde
        if (porcentaje > 80 && porcentaje <= 95) colorSemaforo = "#f9b218"; // Amarillo/Naranja
        if (porcentaje > 95) colorSemaforo = "#f44336"; // Rojo

        container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; width: 100%; position: relative;">
            <div style="color: white; font-size: 10px; font-weight: bold; margin-bottom: 5px;">${titulo}</div>
            <div style="position: relative; width: 100px; height: 100px;">
                <canvas id="canvas-${id}" width="100" height="100"></canvas>
                <div style="position: absolute; top: 45%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
                    <div style="color: white; font-size: 16px; font-weight: bold;">${actual}</div>
                    <div style="color: #a1b1c1; font-size: 8px;">HORAS</div>
                </div>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 10px; margin-top: 5px; border: 1px solid #f9b218;">
                <span style="color: #f9b218; font-size: 9px; font-weight: bold;">${etiquetaMax} ${maximo}</span>
            </div>
        </div>`;

        this.generarTrazo(id, porcentaje, colorSemaforo);
    },

    generarTrazo: function(id, p, color) {
        const canvas = document.getElementById(`canvas-${id}`);
        const ctx = canvas.getContext('2d');
        const x = 50, y = 50, radio = 40;
        
        // Fondo (representa el 120%)
        ctx.beginPath();
        ctx.arc(x, y, radio, 0.8 * Math.PI, 0.2 * Math.PI); 
        ctx.lineWidth = 8;
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        ctx.stroke();

        // Marcas periféricas (0, 80, 95, 120)
        const angulos = [
            {a: 0.8 * Math.PI, t: "0%"}, {a: 1.44 * Math.PI, t: "80%"}, 
            {a: 1.63 * Math.PI, t: "95%"}, {a: 0.2 * Math.PI, t: "120%"}
        ];
        
        ctx.font = "bold 7px Arial";
        ctx.fillStyle = "#a1b1c1";
        angulos.forEach(m => {
            const tx = x + (radio + 12) * Math.cos(m.a);
            const ty = y + (radio + 12) * Math.sin(m.a);
            ctx.fillText(m.t, tx - 5, ty + 3);
        });

        // Trazo de progreso (limitado a 120%)
        const finP = 0.8 * Math.PI + (Math.min(p, 120) / 120) * (1.4 * Math.PI);
        ctx.beginPath();
        ctx.arc(x, y, radio, 0.8 * Math.PI, finP);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round';
        ctx.stroke();
    }
};
