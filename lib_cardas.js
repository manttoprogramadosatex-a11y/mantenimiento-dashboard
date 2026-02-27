const SatexCardas = {
    inicializarIndicador: function(id, actual, maximo) {
        const ctx = document.getElementById(id);
        if (!ctx) return;

        // Limpiar instancia previa si existe
        const chartExistente = Chart.getChart(id);
        if (chartExistente) { chartExistente.destroy(); }

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [actual, maximo - actual],
                    backgroundColor: ['#28a745', '#e9ecef'],
                    borderWidth: 0,
                    circumference: 180,
                    rotation: 270
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                }
            }
        });
    }
};
