/* lib_preventivo_design.js */
/* VERSION 2.5
   - Se agrega lectura de % desde Google Sheets D4
   - NO se elimina nada
   - NO se modifica estructura visual
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
                    <div id="texto-cumplimiento" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 18px; font-weight: bold;">
                        ${cumplimiento}%
                    </div>
                </div>
                <div style="color: #a1b1c1; font-size: 9px; font-weight: bold; margin-top: 5px; text-align: center;">CUMPLIMIENTO ACUMULADO</div>
                <button 
                    onclick="accionProcedimientos()"
                    style="margin-top: 8px; background: transparent; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 3px 10px; font-size: 12px; font-weight: bold; cursor: pointer; width: 100%; transition: all 0.1s ease;"
                    onmousedown="this.style.transform='scale(1.05)';"
                    onmouseup="this.style.transform='scale(1)';"
                    onmouseleave="this.style.transform='scale(1)';"
                >
                    PROCEDIMIENTOS
                </button>
            </div>

            <div style="width: 65%; display: flex; flex-direction: column; gap: 6px; justify-content: center;">
                ${this.crearBotonPreventivo("PREVENTIVOS HOY", "55", "#f9b218", "accionPreventivosHoy()")}
                ${this.crearBotonPreventivo("PREV. PENDIENTES ANTES HOY", "20", "#ff9999", "accionPendientes()")}
                ${this.crearBotonPreventivo("PREVENTIVOS EXTRAORDINARIOS", "<span id='valor-extraordinarios'>...</span>", "#ffffff", "accionExtraordinarios()")}
                ${this.crearBotonPreventivo("MANTTO. DICIEMBRE", "<span id='valor-mantto-diciembre'>...</span>", "#4caf50", "accionDiciembre()")}
                ${this.crearBotonPreventivo("MANTTO. ABRIL", "<span id='valor-mantto-abril'>...</span>", "#00bcd4", "accionAbril()")}
                ${this.crearBotonPreventivo("MANTTO. D. FESTIVOS", "<span id='valor-mantto-festivos'>...</span>", "#e91e63", "accionFestivos()")}
            </div>
        </div>`;

        this.inicializarGrafico(cumplimiento);

        cargarManttoAbril();
        cargarManttoDiciembre();
        cargarExtraordinarios();
        cargarManttoFestivos();

        /* NUEVO */
        cargarCumplimientoDesdeSheet();
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
                transition: all 0.1s ease;
            "
            onmousedown="this.style.transform='scale(1.05)';"
            onmouseup="this.style.transform='scale(1)';"
            onmouseleave="this.style.transform='scale(1)';"
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


/* ================= NUEVO BLOQUE PARA % ================= */

async function cargarCumplimientoDesdeSheet() {
    try {
        const sheetId = "16gfm9ZgivtCcpuRKpZQVuxfMcT2_fjpll5w8insJ3jg";
        const gid = 0;
        const celda = "D4";

        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?gid=${gid}&range=${celda}&tqx=out:json`;

        const response = await fetch(url);
        const text = await response.text();
        const json = JSON.parse(text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1));

        let valor = json.table.rows[0]?.c[0]?.v;

        if (typeof valor === "string") {
            valor = valor.replace("%", "").trim();
        }

        valor = parseFloat(valor) || 0;

        const texto = document.getElementById("texto-cumplimiento");
        if (texto) texto.textContent = valor + "%";

        const chart = Chart.getChart("chart-cumplimiento");
        if (chart) {
            chart.data.datasets[0].data = [valor, 100 - valor];
            chart.update();
        }

    } catch (error) {
        console.error("Error cargando cumplimiento:", error);
    }
}
