/* lib_cardas_engine.js - GESTIÓN DINÁMICA DE GRÁFICOS */
const SatexCardasEngine = {
    async dibujar(idContenedor) {
        const grid = document.getElementById(idContenedor);
        if (!grid) return;

        // Pedir datos al loader (D5:M7)
        const datos = await SatexDataLoader.obtenerDatosCardas();

        if (datos.length > 0) {
            // Generar HTML usando el diseño existente en lib_cardas_design.js
            grid.innerHTML = datos.map(c => SatexCardasDesign.crearCarda(c.id, c.t, c.ac, c.max)).join('');

            // Pintar los arcos de cada canvas
            datos.forEach(c => {
                const canvas = document.getElementById(`canvas-${c.id}`);
                if (canvas) {
                    this.pintarGauje(canvas, c.ac, c.max);
                }
            });
        }
    },

    pintarGauje(canvas, ac, max) {
        const ctx = canvas.getContext('2d');
        const x = canvas.width / 2;
        const y = canvas.height - 10;
        const radio = 55;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Fondo del arco (Gris claro)
        ctx.beginPath();
        ctx.arc(x, y, radio, Math.PI, 0);
        ctx.lineWidth = 14;
        ctx.strokeStyle = '#f0f0f0';
        ctx.stroke();

        // Cálculo de porcentaje y color
        const porcentaje = Math.min(ac / max, 1);
        let color = '#4caf50'; // Verde (<70%)
        if (porcentaje > 0.9) color = '#f44336'; // Rojo (>90%)
        else if (porcentaje > 0.7) color = '#ff9800'; // Naranja (>70%)

        // Arco de progreso
        ctx.beginPath();
        ctx.arc(x, y, radio, Math.PI, Math.PI + (Math.PI * porcentaje));
        ctx.strokeStyle = color;
        ctx.stroke();

        // Aguja indicadora
        const angulo = Math.PI + (Math.PI * porcentaje);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angulo) * 45, y + Math.sin(angulo) * 45);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#222';
        ctx.lineCap = 'round';
        ctx.stroke();
    }
};
