const SatexCardasEngine = {
    dibujar: function(contenedorId) {
        const grid = document.getElementById(contenedorId);
        if (!grid) {
            console.error("No se encontró el contenedor: " + contenedorId);
            return;
        }

        // Espacios de 2mm (8px) arriba y abajo
        grid.style.display = "flex";
        grid.style.flexWrap = "nowrap";
        grid.style.overflowX = "auto";
        grid.style.marginTop = "8px"; 
        grid.style.paddingBottom = "8px"; 
        grid.style.gap = "8px";
        grid.style.width = "100%";

        grid.innerHTML = "";
        
        for (let i = 1; i <= 11; i++) {
            const valAleatorio = Math.floor(Math.random() * 1200);
            grid.innerHTML += SatexCardasDesign.crearEstructura(i, valAleatorio, 1000);
            
            // Retraso mínimo para asegurar que el canvas exista en el DOM
            setTimeout(() => {
                SatexCardas.inicializarIndicador(`gauge-${i}`, valAleatorio, 1000);
            }, 50);
        }
    }
};
