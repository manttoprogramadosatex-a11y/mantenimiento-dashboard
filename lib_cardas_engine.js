const SatexCardasEngine = {
    grid: null,
    datosUnidades: [],

    dibujar: function(contenedorId) {
        this.grid = document.getElementById(contenedorId);
        if (!this.grid) return;
        
        // DISEÑO DE POSICIONAMIENTO SATEX
        this.grid.style.display = "flex";
        this.grid.style.flexWrap = "nowrap";
        this.grid.style.overflowX = "auto";
        
        // Espacio de 2mm (8px) arriba (entre Husos y Carátulas)
        this.grid.style.marginTop = "8px"; 
        
        // Espacio de 2mm (8px) abajo (entre Carátulas y Scroll)
        this.grid.style.paddingBottom = "8px"; 
        
        this.grid.style.paddingTop = "0px";
        this.grid.style.gap = "8px";
        this.grid.style.width = "100%";

        this.grid.innerHTML = ""; 
        this.datosUnidades = [];

        // Generar las 11 cardas autorizadas
        for (let i = 1; i <= 11; i++) {
            const maxVal = 1000;
            // Mantenemos la simulación para verificar los rangos de color
            const acVal = Math.floor(Math.random() * 1250); 
            this.datosUnidades.push({ ac: acVal, max: maxVal });
            
            // Usamos la librería de diseño lib_cardas_design.js
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
