const SatexCardasEngine = {
    dibujar: function(contenedorId) {
        const grid = document.getElementById(contenedorId);
        if (!grid) return;
        
        grid.innerHTML = ""; // Limpieza total
        
        // Bucle forzado a 11 unidades
        for (let i = 1; i <= 11; i++) {
            const cardaHtml = SatexCardasDesign.crearEstructura(i);
            grid.innerHTML += cardaHtml;
        }

        // Inicialización de las 11 agujas
        for (let i = 1; i <= 11; i++) {
            if (window.SatexCardas) {
                SatexCardas.inicializarIndicador(`gauge-${i}`, 0, 1000);
            }
        }
    }
};
