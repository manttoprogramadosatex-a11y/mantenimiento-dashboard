const SatexCardas = {
    // Escala: Verde (0-80%), Amarillo (80-100%), Rojo (100-140%)
    obtenerColorRango: function(ac, max) {
        const porcentaje = (ac / max) * 100;
        if (porcentaje > 100) return '#da291c'; // Rojo (Sobreproducción)
        if (porcentaje > 80) return '#f9b218';  // Amarillo (Precaución)
        return '#28a745';                     // Verde (Óptimo)
    },

    inicializarIndicador: function(id, actual, maximo) {
        const ctx = document.getElementById(id);
        if (!ctx) return;

        const colorArco = this.obtenerColorRango(actual, maximo);

        const chartExistente = Chart.getChart(id);
        if (chartExistente) { chartExistente.destroy(); }

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    // Graficamos sobre base 140% para que el arco coincida con la aguja
                    data: [actual, (maximo * 1.4) - actual],
                    backgroundColor: [colorArco, '#e9ecef'], // Color arco / Color fondo
                    borderWidth: 0,
                    circumference: 180,
                    rotation: 270
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%', // Arco más fino para resaltar la aguja gruesa
                animation: { animateRotate: true, duration: 800 },
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                }
            }
        });
    }
};
