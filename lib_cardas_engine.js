/* lib_cardas_engine.js */
const SatexCardasEngine = {
    dibujar: async function(idContenedor) {
        const grid = document.getElementById(idContenedor);
        if (!grid) return;

        const datos = await SatexDataLoader.obtenerDatosCardas();
        if (datos.length === 0) return;

        // Limpiar y renderizar nuevas cardas
        grid.innerHTML = datos.map(c => SatexCardasDesign.crearCarda(c.id, c.t, c.ac, c.max)).join('');

        // Dibujar cada Gauge en su respectivo canvas
        datos.forEach(c => {
            const canvas = document.getElementById(`canvas-${c.id}`);
            if (canvas) this.pintarGauje(canvas, c.ac, c.max);
        });
    },

    pintarGauje: function(canvas, ac, max) {
        const ctx = canvas.getContext('2d');
        const x = canvas.width / 2;
        const y = canvas.height - 15;
        const radio = 55;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Fondo Gris
        ctx.beginPath();
        ctx.arc(x, y, radio, Math.PI, 0);
        ctx.lineWidth = 15;
        ctx.strokeStyle = '#e0e0e0';
        ctx.stroke();

        // Cálculo de porcentaje
        const porcentaje = Math.min(ac / max, 1);
        
        // Lógica de colores según proximidad al máximo
        let color = '#4caf50'; // Verde (OK)
        if (porcentaje >= 0.95) color = '#f44336'; // Rojo (Crítico)
        else if (porcentaje >= 0.80) color = '#ff9800'; // Naranja (Aviso)

        // Arco de Progreso
        ctx.beginPath();
        ctx.arc(x, y, radio, Math.PI, Math.PI + (Math.PI * porcentaje));
        ctx.strokeStyle = color;
        ctx.stroke();

        // Aguja indicadora
        const angulo = Math.PI + (Math.PI * porcentaje);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angulo) * 50, y + Math.sin(angulo) * 50);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#333';
        ctx.lineCap = 'round';
        ctx.stroke();
    }
};
