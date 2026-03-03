/* lib_preventivo_design.js */
/* VERSION 2.0
   - Mantto Abril ahora se calcula dinámicamente desde Google Sheets
   - Suma Personal Satex N1 + Personal Externo L1
   - Abre hoja correspondiente al dar clic
   - NO se modifica estructura visual
   - NO se elimina ningún elemento
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
                    style="margin-top: 8px; background: transparent; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 3px 10px; font-size: 12px; font-weight: bold; cursor: pointer; width: 100%;">
                    PROCEDIMIENTOS
                </button>
            </div>

            <div style="width: 65%; display: flex; flex-direction: column; gap: 6px; justify-content: center;">
                ${this.crearBotonPreventivo("PREVENTIVOS HOY", "55", "#f9b218", "accionPreventivosHoy()")}
                ${this.crearBotonPreventivo("PREV. PENDIENTES ANTES HOY", "20", "#ff9999", "accionPendientes()")}
                ${this.crearBotonPreventivo("PREVENTIVOS EXTRAORDINARIOS", "03", "#ffffff", "accionExtraordinarios()")}
                ${this.crearBotonPreventivo("MANTTO. DICIEMBRE", "12", "#4caf50", "accionDiciembre()")}
                ${this.crearBotonPreventivo("MANTTO. ABRIL", "<span id='valor-mantto-abril'>...</span>", "#00bcd4", "accionAbril()")}
                ${this.crearBotonPreventivo("MANTTO. D. FESTIVOS", "5", "#e91e63", "accionFestivos()")}
            </div>
        </div>`;

        this.inicializarGrafico(cumplimiento);
        cargarManttoAbril();
    },

    crearBotonPreventivo: function(label, valor, color, funcion) {
        return `
        <button 
            onclick="${funcion}"
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
            "
        >
            <span style="color: white; font-size: 12px; font-weight: bold; text-transform: uppercase;">
                ${label}
            </span>
            <span style="color: ${color}; font-size: 14px; font-weight: 900;">
                ${valor}
            </span>
        </button>`;
    },

    inicializarGrafico: function(porcentaje) {
        const ctx = document.getElementById('chart-cumplimiento');
        if (!ctx) return;

        const chartExistente = Chart.getChart("chart-cumplimiento");
        if (chartExistente) chartExistente.destroy();

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
                plugins: { legend: { display: false }, tooltip: { enabled: false } }
            }
        });
    }
};


/* ============================================================
   NUEVA FUNCIÓN: CARGAR MANTTO ABRIL DESDE GOOGLE SHEETS
   ============================================================ */

async function cargarManttoAbril() {
    try {
        const response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vT8MEMWOM2kgJ79JsgeYlBDY3b6R2pkaPn9PMPYMk8KRmH5u4eZ3WS5pz0Fae-w2mUcokmJHc-qmun2/pub?output=csv");
        const data = await response.text();

        const filas = data.split("\n");

        // Ajusta índices si cambian posiciones
        const valorSatex = parseFloat(filas[0].split(",")[13]) || 0;   // N1
        const valorExterno = parseFloat(filas[0].split(",")[11]) || 0; // L1

        const total = valorSatex + valorExterno;

        const span = document.getElementById("valor-mantto-abril");
        if (span) span.textContent = total;

    } catch (error) {
        console.error("Error cargando Mantto Abril:", error);
    }
}


/* ============================================================
   FUNCIONES GLOBALES
   ============================================================ */

function accionPreventivosHoy() {
    const nuevaVentana = window.open("", "_blank");
    nuevaVentana.document.write(`
        <html>
            <body style="margin:0;background:#1e1e1e;">
                <iframe src="https://calendar.google.com/calendar/embed?src=mantto.programado.satex%40gmail.com&ctz=America%2FMexico_City" 
                style="width:100%;height:100vh;border:0;"></iframe>
            </body>
        </html>
    `);
}

function accionAbril() {
    window.open("https://docs.google.com/spreadsheets/d/1sySN3ckuUjiYLTEbqxVA2LOtAjkp2moX2HKR2UR0ha4/edit?gid=0#gid=0", "_blank");
}

function accionPendientes() {}
function accionExtraordinarios() {}
function accionDiciembre() {}
function accionFestivos() {}
