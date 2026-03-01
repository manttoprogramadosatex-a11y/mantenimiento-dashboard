/* lib_cardas_engine.js */
const SatexCardasEngine = {
    dibujar: function(idContenedor, datos) {
        const grid = document.getElementById(idContenedor);
        if (!grid || !datos) return;

        grid.innerHTML = datos.map(c => SatexCardasDesign.crearCarda(c.id, c.t, c.ac, c.max)).join('');

        datos.forEach(c => {
            const canvas = document.getElementById(`canvas-${c.id}`);
            if (canvas) this.pintarGauje(canvas, c.ac, c.max);
        });
    },

    pintarGauje: function(canvas, ac, max) {
        const ctx = canvas.getContext('2d');
        const x = canvas.width / 2;
        const y = canvas.height - 5;
        const radio = 60;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Fondo gris
        ctx.beginPath();
        ctx.arc(x, y, radio, Math.PI, 0);
        ctx.lineWidth = 12;
        ctx.strokeStyle = '#eeeeee';
        ctx.stroke();

        // Progreso basado en toneladas
        const porcentaje = Math.min(ac / (max || 1), 1);
        let color = porcentaje > 0.9 ? '#f44336' : (porcentaje > 0.7 ? '#ff9800' : '#4caf50');

        ctx.beginPath();
        ctx.arc(x, y, radio, Math.PI, Math.PI + (Math.PI * porcentaje));
        ctx.strokeStyle = color;
        ctx.stroke();

        // Aguja
        const angulo = Math.PI + (Math.PI * porcentaje);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angulo) * 50, y + Math.sin(angulo) * 50);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#333';
        ctx.stroke();
    }
};
