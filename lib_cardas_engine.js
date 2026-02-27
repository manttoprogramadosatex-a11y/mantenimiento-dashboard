const SatexCardasEngine = {
    dibujar: function(contenedorId) {
        const grid = document.getElementById(contenedorId);
        if (!grid) return;
        
        // Aplicamos estilos de scroll lateral directamente al contenedor
        grid.style.display = "flex";
        grid.style.flexWrap = "nowrap";
        grid.style.overflowX = "auto";
        grid.style.overflowY = "hidden";
        grid.style.width = "100%";
        grid.style.padding = "10px";
        grid.style.gap = "10px";
        grid.style.boxSizing = "border-box";

        grid.innerHTML = ""; // Limpiar
        
        // Generar exactamente las 11 cardas
        for (let i = 1; i <= 11; i++) {
            grid.innerHTML += SatexCardasDesign.crearEstructura(i);
        }

        // Inicializar los indicadores (esperamos un momento a que el DOM cargue)
        setTimeout(() => {
            for (let i = 1; i <= 11; i++) {
                if (window.SatexCardas && typeof SatexCardas.inicializarIndicador === 'function') {
                    SatexCardas.inicializarIndicador(`gauge-${i}`, 0, 1000);
                }
            }
        }, 150);
    }
};
