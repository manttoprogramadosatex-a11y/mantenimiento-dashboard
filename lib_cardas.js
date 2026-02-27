const SatexCardas = {
    inicializarIndicador: function(id, actual, maximo) {
        const ctx = document.getElementById(id);
        if (!ctx) return;
        const porc = (actual / maximo) * 100;
        let col = '#28a745';
        if (porc > 100) col = '#da291c';
        else if (porc > 80) col = '#f9b218';
        const chartExistente = Chart.getChart(id);
        if (chartExistente) { chartExistente.destroy(); }
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [actual, (maximo * 1.4) - actual],
                    backgroundColor: [col, '#eee'],
                    borderWidth: 0,
                    circumference: 180,
                    rotation: 270
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: { padding: 0 },
                cutout: '75%',
                plugins: { legend: { display: false }, tooltip: { enabled: false } }
            }
        });
    }
};
