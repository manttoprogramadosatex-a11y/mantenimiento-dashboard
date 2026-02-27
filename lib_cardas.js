const SatexCardas = {
    inicializarIndicador: function(id, actual, maximo) {
        const ctx = document.getElementById(id);
        if (!ctx) return;
        const chartExistente = Chart.getChart(id);
        if (chartExistente) chartExistente.destroy();

        const porcentaje = (actual / maximo) * 100;
        let color = '#28a745';
        if (porcentaje > 100) color = '#da291c';
        else if (porcentaje > 80) color = '#f9b218';

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [actual, (maximo * 1.4) - actual],
                    backgroundColor: [color, '#eee'],
                    borderWidth: 0,
                    circumference: 180,
                    rotation: 270
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
                plugins: { legend: { display: false }, tooltip: { enabled: false } }
            }
        });
    }
};
