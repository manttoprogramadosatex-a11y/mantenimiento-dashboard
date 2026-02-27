const SatexCardasEngine = {
    grid: null,
    datosUnidades: [],

    dibujar: function(contenedorId) {
        this.grid = document.getElementById(contenedorId);
        if (!this.grid) return;
        
        // ELIMINACIÓN DE ESPACIO MORADO: 
        // Ajustamos padding superior e inferior a 0 para pegar las cardas a los bordes
        this.grid.style.display = "flex";
        this.grid.style.flexWrap = "nowrap";
        this.grid.style.overflowX = "auto";
        this.grid.style.paddingTop = "0px";    // Quita espacio de arriba
        this.grid.style.paddingBottom = "0px"; // Quita espacio de abajo
        this.grid.style.marginTop = "0px";
        this.grid.style.marginBottom = "0px";
        this.grid.style.gap = "8px";

        this.grid.innerHTML = ""; 
        this.datosUnidades = [];

        // Generar las 11 cardas (Manteniendo tu lógica de datos)
        for (let i = 1; i <= 11; i++) {
            const maxVal = 1000;
            const acVal = Math.floor(Math.random() * 1100); 
            this.datosUnidades.push({ ac: acVal, max: maxVal });
            // Se llama al diseño sin modificar su estructura interna
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
