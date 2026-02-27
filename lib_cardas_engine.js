const SatexCardasEngine = {
    dibujar: function(contenedorId) {
        const grid = document.getElementById(contenedorId);
        if (!grid) return;
        
        grid.style.display = "flex";
        grid.style.flexWrap = "nowrap";
        grid.style.overflowX = "auto";
        grid.style.padding = "20px";
        grid.style.gap = "10px";
        grid.style.scrollBehavior = "smooth";

        grid.innerHTML = ""; 
        const datosSimulados = [];

        for (let i = 1; i <= 11; i++) {
            const maxVal = 1000;
            let acVal;

            // Simulación balanceada para ver todos los colores
            if (i <= 4) {
                acVal = Math.floor(Math.random() * (750 - 200 + 1)) + 200; // Zona Verde
            } else if (i <= 8) {
                acVal = Math.floor(Math.random() * (980 - 820 + 1)) + 820; // Zona Amarilla
            } else {
                acVal = Math.floor(Math.random() * (1380 - 1050 + 1)) + 1050; // Zona Roja (>100%)
            }
            
            datosSimulados.push({ ac: acVal, max: maxVal });
            grid.innerHTML += SatexCardasDesign.crearEstructura(i, acVal, maxVal);
        }

        // Ejecutar el dibujo de las agujas
        setTimeout(() => {
            datosSimulados.forEach((dato, index) => {
                if (typeof SatexCardas !== 'undefined') {
                    SatexCardas.inicializarIndicador(`gauge-${index + 1}`, dato.ac, dato.max);
                }
            });
        }, 500);
    }
};
