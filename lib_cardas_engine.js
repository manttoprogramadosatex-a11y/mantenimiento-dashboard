const SatexCardasEngine = {
    dibujar: function(contenedorId) {
        const grid = document.getElementById(contenedorId);
        if (!grid) return;

        // Estilos de contenedor con los 2mm (8px) de margen
        grid.style.display = "flex";
        grid.style.flexWrap = "nowrap";
        grid.style.overflowX = "auto";
        grid.style.marginTop = "8px";    // Espacio de 2mm arriba
        grid.style.paddingBottom = "8px"; // Espacio de 2mm abajo
        grid.style.gap = "8px";
        grid.style.width = "100%";

        grid.innerHTML = "";
        
        for (let i = 1; i <= 11; i++) {
            const valAleatorio = Math.floor(Math.random() * 1150);
            grid.innerHTML += SatexCardasDesign.crearEstructura(i, valAleatorio, 1000);
            
            // Inicializar el arco gráfico
            setTimeout(() => {
                if (typeof SatexCardas !== 'undefined') {
                    SatexCardas.inicializarIndicador(`gauge-${i}`, valAleatorio, 1000);
                }
            }, 50);
        }
    }
};
