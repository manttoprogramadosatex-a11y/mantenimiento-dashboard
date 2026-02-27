const SatexCardas = {
    inicializarIndicador: function(id, actual, maximo) {
        const ctx = document.getElementById(id);
        if (!ctx) return;

        // Calculamos el porcentaje real
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
                    // El gráfico siempre se dibuja sobre una base de 140 para que la escala sea real
                    data: [actual, (maximo * 1.4) - actual],
                    backgroundColor: [colorArco, '#e9ecef'],
                    borderWidth: 0,
                    circumference: 180,
                    rotation: 270
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                }
            }
        });
    }
};
