const SatexCardasEngine = {
    version: "2.2",
    intervalo: null,

    dibujar: function(idContenedor) {
        this.contenedor = idContenedor;
        this.cargarDatos();

        if (!this.intervalo) {
            this.intervalo = setInterval(() => {
                this.cargarDatos();
            }, 60000);
        }
    },

    cargarDatos: async function() {
        const grid = document.getElementById(this.contenedor);
        if (!grid) return;

        const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7wFZesHZM_4ed4aj7oAU4MgNvuhZ8AQ-CUL_4QkrMzzR4PawAQ36-hGTvYhxeslLKjFzvfSwApNmT/pub?gid=1547200035&single=true&output=csv";

        try {
            const response = await fetch(url);
            const csv = await response.text();
            const filas = csv.split("\n").map(f => f.split(","));

            const filaAct = filas.find(f => f.includes("Toneladas Act."));
            const filaMax = filas.find(f => f.includes("Toneladas Max. Vida"));

            if (!filaAct || !filaMax) return;

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

            grid.innerHTML = datos.map(c =>
                SatexCardasDesign.crearCarda(c.id, c.t, c.ac, c.max)
            ).join('');

            datos.forEach(c => {
                const canvas = document.getElementById(`canvas-${c.id}`);
                if (canvas) {
                    this.pintarGauje(canvas, c.ac, c.max);
                }
            });

        } catch (error) {
            console.error("Error cargando datos:", error);
        }
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

        const porcentaje = max > 0 ? Math.min(ac / max, 1) : 0;

        let color = '#4caf50'; // Verde 0–80%
        if (porcentaje > 0.9) color = '#f44336';      // Rojo 90–100%
        else if (porcentaje > 0.8) color = '#ffc107'; // Amarillo 80–90%

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
