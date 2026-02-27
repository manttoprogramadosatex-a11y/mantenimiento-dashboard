const SatexCardasEngine = {
    grid: null,
    datosUnidades: [],
    dibujar: function(contenedorId) {
        this.grid = document.getElementById(contenedorId);
        if (!this.grid) return;
        
        this.grid.style.display = "flex";
        this.grid.style.flexWrap = "nowrap";
        this.grid.style.overflowX = "auto";
        
        [cite_start]// Reducción a 1mm arriba [cite: 485, 486]
        this.grid.style.marginTop = "4px"; 
        this.grid.style.paddingTop = "0px";
        
        [cite_start]// Reducción a 1mm abajo (espacio con la barra amarilla) [cite: 487, 488]
        this.grid.style.paddingBottom = "4px"; 
        
        this.grid.style.gap = "8px";
        this.grid.style.width = "100%";
        this.grid.innerHTML = "";
        this.datosUnidades = [];
        
        for (let i = 1; i <= 11; i++) {
            const maxVal = 1000;
            const acVal = Math.floor(Math.random() * 1250);
            this.datosUnidades.push({ ac: acVal, max: maxVal });
            this.grid.innerHTML += SatexCardasDesign.crearEstructura(i, acVal, maxVal);
        }
        this.actualizarGraficos();
    },
    actualizarGraficos: function() {
        setTimeout(() => {
            this.datosUnidades.forEach((dato, index) => {
                if (typeof SatexCardas !== 'undefined') {
                    SatexCardas.inicializarIndicador(`gauge-${index + 1}`, dato.ac, dato.max);
                }
            });
        }, 300);
    }
};
