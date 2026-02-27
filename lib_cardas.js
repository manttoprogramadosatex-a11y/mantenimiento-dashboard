const SatexCardas = {
    charts: [],
    iniciar: function(id) {
        const contenedor = document.getElementById(id);
        contenedor.innerHTML = "";
        // Forzamos el estilo del contenedor para que las cardas se alineen bien
        contenedor.style.display = "flex";
        contenedor.style.flexWrap = "wrap";
        contenedor.style.justifyContent = "center";
        contenedor.style.gap = "15px";
        contenedor.style.padding = "20px";

        for (let i = 1; i <= 8; i++) {
            const card = document.createElement('div');
            // Estilos encapsulados para la tarjeta
            card.style.background = "white";
            card.style.width = "140px";
            card.style.height = "185px";
            card.style.borderRadius = "8px";
            card.style.padding = "10px";
            card.style.display = "flex";
            card.style.flexDirection = "column";
            card.style.alignItems = "center";
            card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
            card.style.boxSizing = "border-box";

            card.innerHTML = `
                <div style="font-size: 13px; font-weight: bold; color: #333; margin-bottom: 5px;">Carda ${i}</div>
                <div style="width: 120px; height: 85px; position: relative;">
                    <canvas id="gauge-${i}"></canvas>
                </div>
                <p style="font-size: 14px; font-weight: bold; color: black; margin: 8px 0 0 0;" id="val-${i}">Ac. 0</p>
                <p style="font-size: 10px; color: #666; margin: 0;">Max. 1000</p>
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
                responsive: true,
                maintainAspectRatio: false,
                rotation: -110,
                circumference: 220,
                cutout: '75%',
                plugins: { legend: false, tooltip: false },
                animation: false
            },
            plugins: [{
                afterDraw: (chart) => {
                    const { ctx, width, height } = chart;
                    ctx.save();
                    const cx = width / 2;
                    const cy = height / 1.35;
                    const r = chart.getDatasetMeta(0).data[0].outerRadius;
                    const angle = (Math.PI * 0.88) + (chart.data.datasets[0].needleValue / 100) * (Math.PI * 1.23);
                    ctx.translate(cx, cy);
                    ctx.rotate(angle);
                    ctx.beginPath();
                    ctx.moveTo(0, -2);
                    ctx.lineTo(r - 10, 0);
                    ctx.lineTo(0, 2);
                    ctx.fillStyle = '#000';
                    ctx.fill();
                    ctx.rotate(-angle);
                    ctx.beginPath();
                    ctx.arc(0, 0, 4, 0, Math.PI * 2);
                    ctx.fillStyle = '#000';
                    ctx.fill();
                    ctx.restore();
                }
            }]
        });
        this.charts.push(chart);
    }
};
