const SatexCardas = {
    charts: [],
    iniciar: function(id) {
        const contenedor = document.getElementById(id);
        contenedor.innerHTML = ""; // Limpiar
        for (let i = 1; i <= 8; i++) {
            const card = document.createElement('div');
            card.className = 'carda-mini';
            card.innerHTML = `
                <div class="titulo-carda">Carda ${i}</div>
                <div class="canvas-box"><canvas id="gauge-${i}"></canvas></div>
                <div style="text-align:center">
                    <p style="font-size:12px; font-weight:bold; margin:5px 0 0 0;" id="val-${i}">Ac. 0</p>
                    <p style="font-size:10px; color:#666; margin:0;" id="max-${i}">Max. 1000</p>
                </div>`;
            contenedor.appendChild(card);
            this.crearGrafico(i);
        }
    },
    crearGrafico: function(i) {
        const ctx = document.getElementById(`gauge-${i}`).getContext('2d');
        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: { datasets: [{ data: [70, 15, 15], backgroundColor: ["#23a446", "#f9b218", "#da291c"], needleValue: 0 }] },
            options: { rotation: -110, circumference: 220, cutout: '75%', plugins: { legend: false, tooltip: false }, animation: false },
            plugins: [{
                afterDraw: (chart) => {
                    const { ctx, width, height } = chart; ctx.save();
                    const cx = width / 2; const cy = height / 1.35;
                    const r = chart.getDatasetMeta(0).data[0].outerRadius;
                    const angle = (Math.PI * 0.88) + (chart.data.datasets[0].needleValue / 100) * (Math.PI * 1.23);
                    ctx.translate(cx, cy); ctx.rotate(angle);
                    ctx.beginPath(); ctx.moveTo(0, -2); ctx.lineTo(r - 8, 0); ctx.lineTo(0, 2);
                    ctx.fillStyle = '#000'; ctx.fill();
                    ctx.rotate(-angle); ctx.beginPath(); ctx.arc(0, 0, 3, 0, Math.PI * 2);
                    ctx.fillStyle = '#000'; ctx.fill(); ctx.restore();
                }
            }]
        });
        this.charts.push(chart);
    }
};
