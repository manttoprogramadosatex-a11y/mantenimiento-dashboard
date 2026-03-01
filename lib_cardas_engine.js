/* lib_cardas_engine.js */
/* VERSION 2.0
   - Dibujado dinámico basado en datos de Excel
   - Soporta actualización en tiempo real
*/

const SatexCardasEngine = {
    dibujar: async function(idContenedor) {
        const grid = document.getElementById(idContenedor);
        if (!grid) return;

        // Obtener datos reales de la hoja de cálculo
        const datos = await SatexDataLoader.obtenerDatosCardas();

        if (datos.length === 0) {
            grid.innerHTML = "<div style='color:white; padding:20px;'>Cargando datos de cardas...</div>";
            return;
        }

        // Renderizar el HTML
        grid.innerHTML = datos.map(c => SatexCardasDesign.crearCarda(c.id, c.t, c.ac, c.max)).join('');

        // Dibujar los gauges
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

        // Fondo del arco
        ctx.beginPath();
        ctx.arc(x, y, radio, Math.PI, 0);
        ctx.lineWidth = 12;
        ctx.strokeStyle = '#eeeeee';
        ctx.stroke();

        // Arco de progreso
        const porcentaje = Math.min(ac / max, 1);
        let color = '#4caf50'; // Verde
        if (porcentaje > 0.9) color = '#f44336'; // Rojo (>90%)
        else if (porcentaje > 0.7) color = '#ff9800'; // Naranja (>70%)

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
