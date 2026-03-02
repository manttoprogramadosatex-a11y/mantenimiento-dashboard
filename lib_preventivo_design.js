const SatexPreventivoDesign = {
    render: function(id, cumplimiento) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="display: flex; height: 100%; align-items: center; padding: 5px; gap: 15px; font-family: 'Segoe UI', sans-serif;">
            <div style="width: 35%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <div style="position: relative; width: 85px; height: 85px;">
                    <canvas id="chart-cumplimiento"></canvas>
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 18px; font-weight: bold;">
                        ${cumplimiento}%
                    </div>
                </div>
                <div style="color: #a1b1c1; font-size: 9px; font-weight: bold; margin-top: 5px; text-align: center;">CUMPLIMIENTO ACUMULADO</div>
                <button style="margin-top: 8px; background: transparent; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 3px 10px; font-size: 11px; font-weight: bold; cursor: pointer; width: 100%;">PROCEDIMIENTOS</button>
            </div>

            <div style="width: 65%; display: flex; flex-direction: column; gap: 4px; justify-content: center;">
                ${this.crearFila("PREVENTIVOS HOY", "55", "#f9b218", "accionPreventivosHoy()")}
                ${this.crearFila("PREV. PENDIENTES ANTES HOY", "20", "#ff9999", "accionPendientes()")}
                ${this.crearFila("PREVENTIVOS EXTRAORDINARIOS", "03", "#ffffff", "accionExtraordinarios()")}
                ${this.crearFila("MANTTO. DICIEMBRE", "12", "#4caf50", "accionDiciembre()")}
                ${this.crearFila("MANTTO. ABRIL", "8", "#00bcd4", "accionAbril()")}
                ${this.crearFila("MANTTO. D. FESTIVOS", "5", "#e91e63", "accionFestivos()")}
            </div>
        </div>`;

        this.inicializarGrafico(cumplimiento);
    },

    // Ahora crea elementos <button> en lugar de <div>
    crearFila: function(label, valor, color, funcionAccion) {
        return `
        <button 
            onclick="${funcionAccion}"
            style="
                display: flex; 
                align-items: center; 
                justify-content: space-between; 
                background: rgba(255,255,255,0.05); 
                border: 1px solid rgba(255,255,255,0.1); 
                border-radius: 4px; 
                padding: 2px 8px; 
                height: 22px;
                cursor: pointer;
                width: 100%;
                outline: none;
                transition: background 0.2s;
            "
            onmouseover="this.style.background='rgba(255,255,255,0.15)'"
            onmouseout="this.style.background='rgba(255,255,255,0.05)'"
        >
            <span style="color: white; font-size: 10px; font-weight: bold; text-transform: uppercase; pointer-events: none;">${label}</span>
            <span style="color: ${color}; font-size: 13px; font-weight: bold; pointer-events: none;">${valor}</span>
        </button>`;
    },

    inicializarGrafico: function(porcentaje) {
        const ctx = document.getElementById('chart-cumplimiento');
        if (!ctx) return;
        
        const chartExistente = Chart.getChart("chart-cumplimiento");
        if (chartExistente) { chartExistente.destroy(); }

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [porcentaje, 100 - porcentaje],
                    backgroundColor: ['#4caf50', 'rgba(255,255,255,0.1)'],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '80%',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                }
            }
        });
    }
};
