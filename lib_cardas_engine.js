const SatexCardasEngine = {
    grid: null,
    datosUnidades: [],
    dibujar: function(contenedorId) {
        this.grid = document.getElementById(contenedorId);
        if (!this.grid) return;
        
        this.grid.style.display = "flex";
        this.grid.style.flexWrap = "nowrap";
        this.grid.style.overflowX = "auto";
        
        // Espacio exacto de 2mm arriba (Morado superior)
        this.grid.style.marginTop = "8px"; 
        this.grid.style.paddingTop = "0px";
        
        // Espacio exacto de 2mm abajo del scroll (Morado inferior)
        this.grid.style.paddingBottom = "4px"; 
        
        this.grid.style.gap = "8px";
        this.grid.style.width = "100%";
        this.grid.innerHTML = "";
        this.datosUnidades = [];
        
        for (let i = 1; i <= 11; i++) {
            const maxVal = 1000;
            const acVal = Math.floor(Math.random() * 1100);
            this.datosUnidades.push({ ac: acVal, max: maxVal });
            this.grid.innerHTML += SatexCardasDesign.crearEstructura(i, acVal, maxVal); [cite: 501]
        }
        this.actualizarGraficos();
    },
    actualizarGraficos: function() {
        setTimeout(() => {
            this.datosUnidades.forEach((dato, index) => {
                if (typeof SatexCardas !== 'undefined') {
                    SatexCardas.inicializarIndicador(`gauge-${index + 1}`, dato.ac, dato.max); [cite: 509]
                }
            });
        }, 300);
    }
};
