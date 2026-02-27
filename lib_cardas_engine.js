const SatexCardasEngine = {
    instancias: [],
    dibujar: function(id) {
        const contenedor = document.getElementById(id);
        contenedor.style = "display:flex; flex-wrap:wrap; justify-content:center; gap:15px; padding:20px;";
        for(let i=1; i<=8; i++) {
            contenedor.innerHTML += SatexCardasDesign.crearTarjetaHTML(i);
        }
        // Retraso mínimo para asegurar que el DOM cargó los canvas
        setTimeout(() => {
            for(let i=1; i<=8; i++) this.initChart(i);
        }, 100);
    },
    initChart: function(i) {
        const ctx = document.getElementById(`gauge-${i}`).getContext('2d');
        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: { datasets: [{ data:[70,15,15], backgroundColor:["#23a446","#f9b218","#da291c"], needleValue:0 }] },
            options: { rotation:-110, circumference:220, cutout:'75%', plugins:{legend:false, tooltip:false}, animation:false },
            plugins: [{
                afterDraw: (chart) => {
                    const {ctx, width, height} = chart; ctx.save();
                    const cx = width/2; const cy = height/1.35;
                    const r = chart.getDatasetMeta(0).data[0].outerRadius;
                    const angle = (Math.PI*0.88)+(chart.data.datasets[0].needleValue/100)*(Math.PI*1.23);
                    ctx.translate(cx, cy); ctx.rotate(angle);
                    ctx.beginPath(); ctx.moveTo(0,-2); ctx.lineTo(r-10,0); ctx.lineTo(0,2);
                    ctx.fillStyle='#000'; ctx.fill();
                    ctx.rotate(-angle); ctx.beginPath(); ctx.arc(0,0,4,0,Math.PI*2);
                    ctx.fillStyle='#000'; ctx.fill(); ctx.restore();
                }
            }]
        });
        this.instancias.push(chart);
    }
};
