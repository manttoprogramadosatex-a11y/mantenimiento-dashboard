const SatexCardas = {
    inicializarIndicador: function(id, actual, maximo) {
        const ctx = document.getElementById(id);
        if (!ctx) return;

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
                cutout: '80%',
                plugins: { legend: { display: false }, tooltip: { enabled: false } }
            }
        });
    }
};
