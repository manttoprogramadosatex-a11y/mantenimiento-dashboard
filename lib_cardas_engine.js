const SatexCardasEngine = {
    version: "2.0",

    dibujar: async function(idContenedor) {
        const grid = document.getElementById(idContenedor);
        if (!grid) return;

        // URL CSV directa Google Sheets
        const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7wFZesHZM_4ed4aj7oAU4MgNvuhZ8AQ-CUL_4QkrMzzR4PawAQ36-hGTvYhxeslLKjFzvfSwApNmT/pub?gid=1547200035&single=true&output=csv";

        try {
            const response = await fetch(url);
            const csv = await response.text();
            const filas = csv.split("\n").map(f => f.split(","));

            // Buscar filas clave
            const filaAct = filas.find(f => f.includes("Toneladas Act."));
            const filaMax = filas.find(f => f.includes("Toneladas Max. Vida"));

            if (!filaAct || !filaMax) return;

            // Columnas D → N (índice 3 a 13)
            const datos = [];

            for (let i = 3; i <= 13; i++) {
                const id = i - 2;

                datos.push({
                    id: id,
                    t: `CARDA ${id}`,
                    ac: parseFloat(filaAct[i]) || 0,
                    max: parseFloat(filaMax[i]) || 0
                });
            }

            // Renderizar HTML
            grid.innerHTML = datos.map(c => 
                SatexCardasDesign.crearCarda(c.id, c.t, c.ac, c.max)
            ).join('');

            // Pintar gauges
            datos.forEach(c => {
                const canvas = document.getElementById(`canvas-${c.id}`);
                if (canvas) {
                    this.pintarGauje(canvas, c.ac, c.max);
                }
            });

        } catch (error) {
            console.error("Error cargando datos de Google Sheets:", error);
        }
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
