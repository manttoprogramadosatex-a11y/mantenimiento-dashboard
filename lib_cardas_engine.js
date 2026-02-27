const SatexCardasEngine = {
    dibujar: function(contenedorId) {
        const grid = document.getElementById(contenedorId);
        grid.innerHTML = ""; // Limpiar contenedor
        
        // Generar exactamente las 11 carátulas autorizadas del modelo Satex
        for (let i = 1; i <= 11; i++) {
            const cardaHtml = SatexCardasDesign.crearEstructura(i);
            grid.innerHTML += cardaHtml;
        }

        // Inicializar los indicadores (Agujas) para las 11 unidades
        for (let i = 1; i <= 11; i++) {
            // SatexCardas.inicializarIndicador(ID, Actual, Maximo)
            if(typeof SatexCardas !== 'undefined') {
                // Por defecto inicializamos en 0 hasta conectar con Excel
                SatexCardas.inicializarIndicador(`gauge-${i}`, 0, 1000);
            }
        }
    }
};
