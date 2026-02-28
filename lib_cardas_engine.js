const SatexCardasEngine = {
    dibujar: function(idContenedor) {
        const grid = document.getElementById(idContenedor);
        if (!grid) return;

        // Array actualizado a 11 cardas con datos ficticios
        const datos = [
            {id: 1, t: "CARDA 1", ac: 956, max: 1000},
            {id: 2, t: "CARDA 2", ac: 707, max: 1000},
            {id: 3, t: "CARDA 3", ac: 0, max: 1000},
            {id: 4, t: "CARDA 4", ac: 389, max: 1000},
            {id: 5, t: "CARDA 5", ac: 1088, max: 1000},
            {id: 6, t: "CARDA 6", ac: 1031, max: 1000},
            {id: 7, t: "CARDA 7", ac: 651, max: 1000},
            {id: 8, t: "CARDA 8", ac: 961, max: 1000},
            {id: 9, t: "CARDA 9", ac: 450, max: 1000},
            {id: 10, t: "CARDA 10", ac: 820, max: 1000},
            {id: 11, t: "CARDA 11", ac: 120, max: 1000}
        ];

        // Renderizar el HTML de las 11 cardas
        grid.innerHTML = datos.map(c => SatexCardasDesign.crearCarda(c.id, c.t, c.ac, c.max)).join('');

        // Dibujar los indicadores (gauges) en cada canvas
        datos.forEach(c => {
            const canvas = document.getElementById(`canvas-${c.id}`);
            if (canvas) {
                this.pintarGauje(canvas, c.ac, c.max);
            }
        });
    },

    pintarGauje: function(canvas, ac, max) {
        const ctx = canvas.getContext('2d');
        const x = canvas.width / 2;
        const y = canvas.height - 5;
        const radio = 60;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Fondo del arco (gris)
        ctx.beginPath();
        ctx.arc(x, y, radio, Math.PI, 0);
        ctx.lineWidth = 12;
        ctx.strokeStyle = '#eeeeee';
        ctx.stroke();

        // Arco de progreso
        const porcentaje = Math.min(ac / max, 1);
        let color = '#4caf50'; // Verde por defecto
        if (porcentaje > 0.9) color = '#f44336'; // Rojo si supera el 90%
        else if (porcentaje > 0.7) color = '#ff9800'; // Naranja si supera el 70%

        ctx.beginPath();
        ctx.arc(x, y, radio, Math.PI, Math.PI + (Math.PI * porcentaje));
        ctx.strokeStyle = color;
        ctx.stroke();

        // Aguja (Posicionada según 'Actual')
        const angulo = Math.PI + (Math.PI * porcentaje);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angulo) * 50, y + Math.sin(angulo) * 50);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#333';
        ctx.stroke();
    }
};
