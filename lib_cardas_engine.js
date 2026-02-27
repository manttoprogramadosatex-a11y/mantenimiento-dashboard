const SatexCardasEngine = {
    grid: null,
    datosUnidades: [],

    dibujar: function(contenedorId) {
        this.grid = document.getElementById(contenedorId);
        if (!this.grid) return;
        
        // Reducción drástica de espacio arriba y abajo (padding: 5px 0)
        this.grid.style.display = "flex";
        this.grid.style.flexWrap = "nowrap";
        this.grid.style.overflowX = "auto";
        this.grid.style.padding = "5px 0px"; 
        this.grid.style.gap = "4px";
        this.grid.style.width = "100%";

        this.grid.innerHTML = ""; 
        this.datosUnidades = [];

        for (let i = 1; i <= 11; i++) {
            const maxVal = 1000;
            const acVal = Math.floor(Math.random() * 1100); 
            this.datosUnidades.push({ ac: acVal, max: maxVal });
            this.grid.innerHTML += SatexCardasDesign.crearEstructura(i, acVal, maxVal);
        }

        this.actualizarGraficos();

        // Simulación cada 3 segundos
        setInterval(() => { this.simular(); }, 3000); 
    },

    actualizarGraficos: function() {
        setTimeout(() => {
            this.datosUnidades.forEach((dato, index) => {
                SatexCardas.inicializarIndicador(`gauge-${index + 1}`, dato.ac, dato.max);
            });
        }, 300);
    },

    simular: function() {
        this.datosUnidades.forEach((dato, index) => {
            const num = index + 1;
            dato.ac = Math.floor(Math.random() * 1350);
            const needle = document.getElementById(`needle-${num}`);
            if (needle) {
                const rot = ((dato.ac / (dato.max * 1.4)) * 180) - 90;
                needle.style.transform = `translateX(-50%) rotate(${rot > 90 ? 90 : (rot < -90 ? -90 : rot)}deg)`;
            }
            SatexCardas.inicializarIndicador(`gauge-${num}`, dato.ac, dato.max);
        });
    }
};
