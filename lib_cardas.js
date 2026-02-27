const SatexCardas = {
    inicializarIndicador: function(id, actual, maximo) {
        const canvas = document.getElementById(id);
        if (!canvas) return;

        // Destruir gráfico previo si existe para evitar errores
        const chartStatus = Chart.getChart(id);
        if (chartStatus) { chartStatus.destroy(); }

        new Chart(canvas, {
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
