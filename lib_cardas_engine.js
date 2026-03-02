/* lib_cardas_engine.js */
/* VERSION 2.0
   - Ahora obtiene datos desde Google Sheets
   - Usa SatexDataLoader.obtenerDatosCardas()
   - Función dibujar() ahora es async
*/

const SatexCardasEngine = {

    async dibujar(idContenedor) {

        const grid = document.getElementById(idContenedor);
        if (!grid) return;

        const datos = await SatexDataLoader.obtenerDatosCardas();

        grid.innerHTML = datos
            .map(c => SatexCardasDesign.crearCarda(c.id, c.t, c.ac, c.max))
            .join('');

        datos.forEach(c => {
            const canvas = document.getElementById(`canvas-${c.id}`);
            if (canvas) {
                this.pintarGauje(canvas, c.ac, c.max);
            }
        });
    },

    pintarGauje(canvas, ac, max) {

        const ctx = canvas.getContext('2d');
        const x = canvas.width / 2;
        const y = canvas.height - 5;
        const radio = 60;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.arc(x, y, radio, Math.PI, 0);
        ctx.lineWidth = 12;
        ctx.strokeStyle = '#eeeeee';
        ctx.stroke();

        const porcentaje = max > 0 ? Math.min(ac / max, 1) : 0;

        let color = '#4caf50';
        if (porcentaje > 0.9) color = '#f44336';
        else if (porcentaje > 0.7) color = '#ff9800';

        ctx.beginPath();
        ctx.arc(x, y, radio, Math.PI, Math.PI + (Math.PI * porcentaje));
        ctx.strokeStyle = color;
        ctx.stroke();

        const angulo = Math.PI + (Math.PI * porcentaje);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angulo) * 50, y + Math.sin(angulo) * 50);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#333';
        ctx.stroke();
    }
};
