const SatexCardas = {
    inicializarIndicador: function(id, actual, maximo) {
        const ctx = document.getElementById(id);
        if (!ctx) return;

        const porcentaje = (actual / maximo) * 100;
        let colorArco = '#28a745'; // Verde (0-80%)

        if (porcentaje > 100) {
            colorArco = '#da291c'; // Rojo (100-140%)
        } else if (porcentaje > 80) {
            colorArco = '#f9b218'; // Amarillo (80-100%)
        }

        const chartExistente = Chart.getChart(id);
        if (chartExistente) { chartExistente.destroy(); }

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    // Graficamos sobre base 140% para que el arco coincida con la aguja
                    data: [actual, (maximo * 1.4) - actual],
                    backgroundColor: [colorArco, '#f0f0f0'],
                    borderWidth: 0,
                    circumference: 180,
                    rotation: 270
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '78%',
                animation: { animateRotate: true },
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                }
            }
        });
    }
};
