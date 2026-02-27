const SatexCardasEngine = {
    grid: null,
    datosUnidades: [],

    dibujar: function(contenedorId) {
        this.grid = document.getElementById(contenedorId);
        if (!this.grid) return;
        
        // Estilos para Fila Única y Scroll Lateral
        this.grid.style.display = "flex";
        this.grid.style.flexWrap = "nowrap";
        this.grid.style.overflowX = "auto";
        this.grid.style.overflowY = "hidden";
        this.grid.style.padding = "20px";
        this.grid.style.gap = "8px";
        this.grid.style.scrollBehavior = "smooth";
        this.grid.style.borderTop = "1px solid rgba(255,255,255,0.1)";

        this.grid.innerHTML = ""; // Limpiar
        this.datosUnidades = [];

        // Generar 11 cardas con valores iniciales
        for (let i = 1; i <= 11; i++) {
            const maxVal = 1000;
            // Valor inicial aleatorio para la primera carga
            const acVal = Math.floor(Math.random() * 1100); 
            this.datosUnidades.push({ ac: acVal, max: maxVal });
            this.grid.innerHTML += SatexCardasDesign.crearEstructura(i, acVal, maxVal);
        }

        // Ejecutar el primer dibujo de las agujas
        this.actualizarGraficosyAgujas();

        // --- BLOQUE DE SIMULACIÓN DINÁMICA ---
        // Actualiza los datos aleatorios cada 3 segundos
        setInterval(() => {
            console.log("Simulando nuevos datos para cardas...");
            this.simularNuevosDatos();
        }, 3000); 
    },

    actualizarGraficosyAgujas: function() {
        if (!this.grid || typeof SatexCardas === 'undefined') return;

        // Esperar a que el DOM esté listo
        setTimeout(() => {
            this.datosUnidades.forEach((dato, index) => {
                const numCarda = index + 1;
                // Pintar el gráfico (arco de color)
                SatexCardas.inicializarIndicador(`gauge-${numCarda}`, dato.ac, dato.max);
            });
        }, 400);
    },

    simularNuevosDatos: function() {
        if (typeof SatexCardas === 'undefined') return;

        this.datosUnidades.forEach((dato, index) => {
            const numCarda = index + 1;
            // Generar nuevo valor AC dinámico (Verde, Amarillo o Rojo hasta 1400)
            dato.ac = Math.floor(Math.random() * (1380 - 150 + 1)) + 150;

            // Actualizar la aguja gruesa y larga por CSS (transición suave)
            const needle = document.getElementById(`needle-${numCarda}`);
            if (needle) {
                const escalaVisual = dato.max * 1.4;
                const rotacion = ((dato.ac / escalaVisual) * 180) - 90;
                const rotacionFinal = rotacion > 90 ? 90 : (rotacion < -90 ? -90 : rotacion);
                needle.style.transform = `translateX(-50%) rotate(${rotacionFinal}deg)`;
            }

            // Redibujar el arco con el nuevo color según el rango
            SatexCardas.inicializarIndicador(`gauge-${numCarda}`, dato.ac, dato.max);
        });
    }
};
