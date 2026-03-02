/* lib_preventivo_design.js */
/* VERSION 1.8
   - Apertura de Google Calendar público
   - No se modifica estructura visual
   - No se elimina ningún elemento
*/

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
                <button 
                    onmousedown="this.style.transform='scale(0.95)'"
                    onmouseup="this.style.transform='scale(1)'"
                    style="margin-top: 8px; background: transparent; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 3px 10px; font-size: 12px; font-weight: bold; cursor: pointer; width: 100%; transition: transform 0.1s;">
                    PROCEDIMIENTOS
                </button>
            </div>

            <div style="width: 65%; display: flex; flex-direction: column; gap: 6px; justify-content: center;">
                ${this.crearBotonPreventivo("PREVENTIVOS HOY", "55", "#f9b218", "accionPreventivosHoy()")}
                ${this.crearBotonPreventivo("PREV. PENDIENTES ANTES HOY", "20", "#ff9999", "accionPendientes()")}
                ${this.crearBotonPreventivo("PREVENTIVOS EXTRAORDINARIOS", "03", "#ffffff", "accionExtraordinarios()")}
                ${this.crearBotonPreventivo("MANTTO. DICIEMBRE", "12", "#4caf50", "accionDiciembre()")}
                ${this.crearBotonPreventivo("MANTTO. ABRIL", "8", "#00bcd4", "accionAbril()")}
                ${this.crearBotonPreventivo("MANTTO. D. FESTIVOS", "5", "#e91e63", "accionFestivos()")}
            </div>
        </div>`;

        this.inicializarGrafico(cumplimiento);
    },

    crearBotonPreventivo: function(label, valor, color, funcion) {
        return `
        <button 
            onclick="${funcion}"
            onmouseover="this.style.backgroundColor='rgba(255,255,255,0.1)'"
            onmouseout="this.style.backgroundColor='transparent'"
            onmousedown="this.style.transform='scale(0.97)'"
            onmouseup="this.style.transform='scale(1)'"
            style="
                display: flex; 
                align-items: center; 
                justify-content: space-between; 
                background-color: transparent; 
                border: 1px solid ${color}; 
                border-radius: 6px; 
                padding: 4px 12px; 
                height: 28px; 
                width: 100%; 
                cursor: pointer;
                transition: all 0.1s ease;
                outline: none;
                transform: scale(1);
            "
        >
            <span style="color: white; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.3px; pointer-events: none;">
                ${label}
            </span>
            <span style="color: ${color}; font-size: 14px; font-weight: 900; pointer-events: none;">
                ${valor}
            </span>
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


/* ============================================================
   FUNCIONES GLOBALES (NO ALTERAN DISEÑO)
   ============================================================ */

function accionPreventivosHoy() {

    const url = "https://calendar.google.com/calendar/embed?src=mantto.programado.satex@gmail.com&ctz=America/Mexico_City";

    window.open(url, "_blank");
}

function accionPendientes() {}
function accionExtraordinarios() {}
function accionDiciembre() {}
function accionAbril() {}
function accionFestivos() {}
