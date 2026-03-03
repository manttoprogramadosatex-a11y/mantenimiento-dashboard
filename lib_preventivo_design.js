/* lib_preventivo_design.js */
/* VERSION 2.3
   - Mantto Abril suma Personal Satex + Personal Externo
   - Mantto Diciembre toma MAX columna A (libro Diciembre)
   - Preventivos Extraordinarios toma MAX columna A (nuevo libro)
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
                    style="margin-top: 8px; background: transparent; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 3px 10px; font-size: 12px; font-weight: bold; cursor: pointer; width: 100%;">
                    PROCEDIMIENTOS
                </button>
            </div>

            <div style="width: 65%; display: flex; flex-direction: column; gap: 6px; justify-content: center;">
                ${this.crearBotonPreventivo("PREVENTIVOS HOY", "55", "#f9b218", "accionPreventivosHoy()")}
                ${this.crearBotonPreventivo("PREV. PENDIENTES ANTES HOY", "20", "#ff9999", "accionPendientes()")}
                ${this.crearBotonPreventivo("PREVENTIVOS EXTRAORDINARIOS", "<span id='valor-extraordinarios'>...</span>", "#ffffff", "accionExtraordinarios()")}
                ${this.crearBotonPreventivo("MANTTO. DICIEMBRE", "<span id='valor-mantto-diciembre'>...</span>", "#4caf50", "accionDiciembre()")}
                ${this.crearBotonPreventivo("MANTTO. ABRIL", "<span id='valor-mantto-abril'>...</span>", "#00bcd4", "accionAbril()")}
                ${this.crearBotonPreventivo("MANTTO. D. FESTIVOS", "5", "#e91e63", "accionFestivos()")}
            </div>
        </div>`;

        this.inicializarGrafico(cumplimiento);

        cargarManttoAbril();
        cargarManttoDiciembre();
        cargarExtraordinarios();
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
   GOOGLE SHEETS
   ============================================================ */

async function obtenerMaxColumnaA(sheetId, gid) {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?gid=${gid}&tqx=out:json&tq=select A`;

    const response = await fetch(url);
    const text = await response.text();

    const json = JSON.parse(text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1));

    if (!json.table.rows) return 0;

    const valores = json.table.rows
        .map(r => parseFloat(r.c[0]?.v))
        .filter(v => !isNaN(v));

    return valores.length ? Math.max(...valores) : 0;
}

/* ================= DICIEMBRE ================= */

async function cargarManttoDiciembre() {
    try {
        const sheetId = "1e-mg7DX-D2DZiK38Fk0RKt9Wnt2I4sOs0Tpgv-o3sy0";
        const maxA = await obtenerMaxColumnaA(sheetId, 0);

        const span = document.getElementById("valor-mantto-diciembre");
        if (span) span.textContent = maxA;

    } catch (error) {
        console.error("Error cargando Mantto Diciembre:", error);
    }
}

/* ================= EXTRAORDINARIOS ================= */

async function cargarExtraordinarios() {
    try {
        const sheetId = "15wGYNgEpeHFaOVSj7I92TCrzCWrcOKxxO8REh2hHrpc";
        const maxA = await obtenerMaxColumnaA(sheetId, 0);

        const span = document.getElementById("valor-extraordinarios");
        if (span) span.textContent = maxA;

    } catch (error) {
        console.error("Error cargando Extraordinarios:", error);
    }
}

/* ================= ABRIL ================= */

async function obtenerValorCelda(gid, celda) {
    const sheetId = "1sySN3ckuUjiYLTEbqxVA2LOtAjkp2moX2HKR2UR0ha4";
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?gid=${gid}&range=${celda}&tqx=out:json`;

    const response = await fetch(url);
    const text = await response.text();

    const json = JSON.parse(text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1));
    const valor = json.table.rows[0]?.c[0]?.v;

    return parseFloat(valor) || 0;
}

async function cargarManttoAbril() {
    try {
        const valorSatex = await obtenerValorCelda(0, "N1");
        const valorExterno = await obtenerValorCelda(1266295995, "L1");

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

function accionDiciembre() {
    window.open("https://docs.google.com/spreadsheets/d/1e-mg7DX-D2DZiK38Fk0RKt9Wnt2I4sOs0Tpgv-o3sy0/edit?gid=0#gid=0", "_blank");
}

function accionExtraordinarios() {
    window.open("https://docs.google.com/spreadsheets/d/15wGYNgEpeHFaOVSj7I92TCrzCWrcOKxxO8REh2hHrpc/edit?gid=0#gid=0", "_blank");
}

function accionPendientes() {}
function accionFestivos() {}
