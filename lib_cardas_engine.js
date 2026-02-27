const SatexCardasEngine = {
    dibujar: function(contenedorId) {
        const grid = document.getElementById(contenedorId);
        if (!grid) return;
        
        // Estilo forzado de fila única con scroll
        grid.style.display = "flex";
        grid.style.flexWrap = "nowrap";
        grid.style.overflowX = "auto";
        grid.style.padding = "25px";
        grid.style.gap = "15px";
        grid.style.width = "100%";

        grid.innerHTML = ""; 
        
        // Creamos las 11 cardas
        for (let i = 1; i <= 11; i++) {
            grid.innerHTML += SatexCardasDesign.crearEstructura(i);
        }

        // Función para pintar las agujas con un pequeño retraso
        setTimeout(() => {
            for (let i = 1; i <= 11; i++) {
                if (typeof SatexCardas !== 'undefined' && typeof Chart !== 'undefined') {
                    SatexCardas.inicializarIndicador(`gauge-${i}`, 0, 1000);
                } else {
                    console.error("Falta Chart.js o lib_cardas.js");
                }
            }
        }, 500); 
    }
};
