const SatexCardasEngine = {
    dibujar: function(contenedorId) {
        const grid = document.getElementById(contenedorId);
        if (!grid) return;

        grid.style.display = "flex";
        grid.style.flexWrap = "nowrap";
        grid.style.overflowX = "auto";
        grid.style.marginTop = "8px";    // 2mm arriba
        grid.style.paddingBottom = "8px"; // 2mm abajo
        grid.style.gap = "8px";
        grid.style.width = "100%";

        grid.innerHTML = "";
        
        for (let i = 1; i <= 11; i++) {
            const val = Math.floor(Math.random() * 1100);
            grid.innerHTML += SatexCardasDesign.crearEstructura(i, val, 1000);
            setTimeout(() => {
                if (typeof SatexCardas !== 'undefined') {
                    SatexCardas.inicializarIndicador(`gauge-${i}`, val, 1000);
                }
            }, 100);
        }
    }
};
