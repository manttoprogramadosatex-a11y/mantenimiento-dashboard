const SatexCardas = {
    charts: [],
    iniciar: function(id) {
        const contenedor = document.getElementById(id);
        contenedor.innerHTML = "";
        
        // --- 1. ESTILOS DE LIBRERÍA: CONTENEDOR DE CARDAS ---
        // Forzamos el alineamiento de la grilla de cardas para que vuelvan a su sitio.
        contenedor.style.display = "flex";
        contenedor.style.flexWrap = "wrap";
        contenedor.style.justifyContent = "center";
        contenedor.style.gap = "20px";
        contenedor.style.padding = "25px";
        contenedor.style.boxSizing = "border-box";

        for (let i = 1; i <= 8; i++) {
            const card = document.createElement('div');
            
            // --- 2. ESTILOS DE LIBRERÍA: TARJETA INDIVIDUAL (El Modelo Acordado) ---
            // Recuperamos el tamaño compacto y el estilo que definimos al inicio.
            card.style.background = "white";
            card.style.width = "140px"; // Ancho original recuperado
            card.style.height = "190px"; // Altura original recuperada
            card.style.borderRadius = "8px";
            card.style.padding = "10px";
            card.style.display = "flex";
            card.style.flexDirection = "column";
            card.style.alignItems = "center";
            card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
            card.style.boxSizing = "border-box";

            // Estructura HTML encapsulada con estilos Inline para los textos.
            card.innerHTML = `
                <div style="font-size:13px; font-weight:bold; color:#333; margin-bottom:5px;">Carda ${i}</div>
                <div style="width: 120px; height: 90px; position: relative;"><canvas id="gauge-${i}"></canvas></div>
                <div style="text-align:center; margin-top:10px;">
                    <p style="font-size:13px; font-weight:bold; color:black; margin:0;" id="val-${i}">Ac. 0</p>
                    <p style="font-size:10px; color:#666; margin:0;">Max. 1000</p>
                </div>
            `;
            contenedor.appendChild(card);
            this.crearGrafico(i);
        }
    },
    crearGrafico: function(i) {
        const ctx = document.getElementById(`gauge-${i}`).getContext('2d');
        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [70, 15, 15],
                    backgroundColor: ["#23a446", "#f9b218", "#da291c"],
                    needleValue: 0
                }]
            },
            options: {
                // Configuramos el Canvas para que se adapte a los 120px del contenedor de librería.
                responsive: true,
                maintainAspectRatio: false,
                rotation: -110,
                circumference: 220,
                cutout: '75%',
                plugins: { legend: false, tooltip: false },
                animation: false
            },
            plugins: [{
                // --- 3. EL MODELO ACORDADO: LÓGICA DE DIBUJO DE LA AGUJA ---
                // Esta es la lógica que define la aguja fina y el pivote central que habíamos aprobado.
                afterDraw: (chart) => {
                    const { ctx, width, height } = chart;
                    ctx.save();
                    const cx = width / 2;
                    const cy = height / 1.35;
                    const r = chart.getDatasetMeta(0).data[0].outerRadius;
                    const angle = (Math.PI * 0.88) + (chart.data.datasets[0].needleValue / 100) * (Math.PI * 1.23);
                    ctx.translate(cx, cy);
                    ctx.rotate(angle);
                    
                    // Dibujo de la aguja fina
                    ctx.beginPath();
                    ctx.moveTo(0, -2); // Ancho de la base
                    ctx.lineTo(r - 10, 0); // Punta de la aguja
                    ctx.lineTo(0, 2); // Ancho de la base
                    ctx.fillStyle = '#000'; // Color de la aguja
                    ctx.fill();
                    
                    // Dibujo del pivote central (círculo)
                    ctx.rotate(-angle);
                    ctx.beginPath();
                    ctx.arc(0, 0, 4, 0, Math.PI * 2); // Pivote central
                    ctx.fillStyle = '#000';
                    ctx.fill();
                    ctx.restore();
                }
            }]
        });
        this.charts.push(chart);
    }
};
