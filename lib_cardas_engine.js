const SatexCardasEngine = {
    dibujar: function(contenedorId, datosSimulados = true) {
        const grid = document.getElementById(contenedorId);
        if (!grid) return;

        // Configuración de espacios solicitada
        grid.style.display = "flex";
        grid.style.flexWrap = "nowrap";
        grid.style.overflowX = "auto";
        grid.style.marginTop = "8px";    // 2mm respecto a Husos
        grid.style.paddingBottom = "8px"; // 2mm respecto a Scroll
        grid.style.gap = "8px";
        grid.style.width = "100%";

        grid.innerHTML = "";
        
        // Generar 11 cardas
        for (let i = 1; i <= 11; i++) {
            const val = datosSimulados ? Math.floor(Math.random() * 1100) : 0;
            grid.innerHTML += SatexCardasDesign.crearEstructura(i, val, 1000);
            
            // Inicializar el gráfico después de insertar el HTML
            setTimeout(() => {
                if (typeof SatexCardas !== 'undefined') {
                    SatexCardas.inicializarIndicador(`gauge-${i}`, val, 1000);
                }
            }, 100);
        }
    }
};
