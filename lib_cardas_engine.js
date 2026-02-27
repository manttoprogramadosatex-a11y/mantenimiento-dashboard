const SatexCardasEngine = {
    dibujar: function(contenedorId) {
        const grid = document.getElementById(contenedorId);
        if (!grid) return;
        
        // Estilo de Scroll Lateral
        grid.style.display = "flex";
        grid.style.flexWrap = "nowrap";
        grid.style.overflowX = "auto";
        grid.style.padding = "20px";
        grid.style.gap = "10px";

        grid.innerHTML = ""; 
        
        // Generar 11
        for (let i = 1; i <= 11; i++) {
            grid.innerHTML += SatexCardasDesign.crearEstructura(i);
        }

        // Esperar un momento para que los canvas existan en el HTML
        setTimeout(() => {
            for (let i = 1; i <= 11; i++) {
                if (typeof SatexCardas !== 'undefined') {
                    SatexCardas.inicializarIndicador(`gauge-${i}`, 0, 1000);
                }
            }
        }, 200);
    }
};
