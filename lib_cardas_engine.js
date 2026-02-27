const SatexCardasEngine = {
    dibujar: function(contenedorId) {
        const grid = document.getElementById(contenedorId);
        if (!grid) return;
        
        grid.style.display = "flex";
        grid.style.flexWrap = "nowrap";
        grid.style.overflowX = "auto";
        grid.style.padding = "10px";
        grid.style.gap = "5px";

        grid.innerHTML = ""; 
        const datosSimulados = [];

        for (let i = 1; i <= 11; i++) {
            const maxVal = 1000;
            // Simulación: algunos en verde, otros en amarillo y otros en rojo (>1000)
            const acVal = Math.floor(Math.random() * (1350 - 400 + 1)) + 400; 
            datosSimulados.push({ ac: acVal, max: maxVal });
            
            grid.innerHTML += SatexCardasDesign.crearEstructura(i, acVal, maxVal);
        }

        setTimeout(() => {
            datosSimulados.forEach((dato, index) => {
                const id = `gauge-${index + 1}`;
                if (typeof SatexCardas !== 'undefined') {
                    SatexCardas.inicializarIndicador(id, dato.ac, dato.max);
                }
            });
        }, 300);
    }
};
