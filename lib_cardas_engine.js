/* lib_cardas_engine.js */
/* VERSION 1.1
   - Se añade parámetro "datosExternos" para recibir info del Excel
   - Mantiene misma lógica de dibujo y colores
*/

const SatexCardasEngine = {
    dibujar: function(idContenedor, datosExternos = null) {
        const grid = document.getElementById(idContenedor);
        if (!grid) return;

        // Si no hay datos del Excel, usa los ficticios por seguridad
        const datos = datosExternos || [
            {id: 1, t: "CARDA 1", ac: 0, max: 1000},
            {id: 2, t: "CARDA 2", ac: 0, max: 1000},
            {id: 3, t: "CARDA 3", ac: 0, max: 1000},
            {id: 4, t: "CARDA 4", ac: 0, max: 1000},
            {id: 5, t: "CARDA 5", ac: 0, max: 1000},
            {id: 6, t: "CARDA 6", ac: 0, max: 1000},
            {id: 7, t: "CARDA 7", ac: 0, max: 1000},
            {id: 8, t: "CARDA 8", ac: 0, max: 1000},
            {id: 9, t: "CARDA 9", ac: 0, max: 1000},
            {id: 10, t: "CARDA 10", ac: 0, max: 1000},
            {id: 11, t: "CARDA 11", ac: 0, max: 1000}
        ];

        grid.innerHTML = datos.map(c => SatexCardasDesign.crearCarda(c.id, c.t, c.ac, c.max)).join('');

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

        ctx.beginPath();
        ctx.arc(x, y, radio, Math.PI, 0);
        ctx.lineWidth = 12;
        ctx.strokeStyle = '#eeeeee';
        ctx.stroke();

        const porcentaje = Math.min(ac / max, 1);
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
