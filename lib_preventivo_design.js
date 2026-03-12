/* lib_preventivo_design.js */
/* VERSION 2.8.2
   - LÓGICA DE COLORES ACTUALIZADA: 0-50% Rojo, 50-80% Amarillo, 80-100% Verde
   - Mantiene PREVENTIVOS HOY y PENDIENTES dinámicos
   - Botón "LECCIONES APRENDIDAS" vinculado a Google Sheets específico
   - Mantiene integración total de funciones de Sheets originales
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
                    onclick="accionProcedimientos()"
                    style="margin-top: 8px; background: transparent; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 3px 10px; font-size: 12px; font-weight: bold; cursor: pointer; width: 100%; transition: all 0.1s ease;"
                    onmousedown="this.style.transform='scale(1.05)';"
                    onmouseup="this.style.transform='scale(1)';"
                    onmouseleave="this.style.transform='scale(1)';"
                >
                    PROCEDIMIENTOS
                </button>

                <button 
                    onclick="accionLeccionesAprendidas()"
                    style="margin-top: 6px; background: transparent; color: white; border: 1px solid #f9b218; border-radius: 4px; padding: 3px 10px; font-size: 12px; font-weight: bold; cursor: pointer; width: 100%; transition: all 0.1s ease;"
                    onmousedown="this.style.transform='scale(1.05)';"
                    onmouseup="this.style.transform='scale(1)';"
                    onmouseleave="this.style.transform='scale(1)';"
                >
                    LECCIONES APRENDIDAS
                </button>
            </div>

            <div style="width: 65%; display: flex; flex-direction: column; gap: 6px; justify-content: center;">
                ${this.crearBotonPreventivo("PREVENTIVOS HOY", "<span id='valor-preventivos-hoy'>...</span>", "#f9b218", "accionPreventivosHoy()")}
                ${this.crearBotonPreventivo("PREV. PENDIENTES ANTES HOY", "<span id='valor-pendientes-antes-hoy'>...</span>", "#ff9999", "accionPendientes()")}
                ${this.crearBotonPreventivo("PREVENTIVOS EXTRAORDINARIOS", "<span id='valor-extraordinarios'>...</span>", "#ffffff", "accionExtraordinarios()")}
                ${this.crearBotonPreventivo("MANTTO. DICIEMBRE", "<span id='valor-mantto-diciembre'>...</span>", "#4caf50", "accionDiciembre()")}
                ${this.crearBotonPreventivo("MANTTO. ABRIL", "<span id='valor-mantto-abril'>...</span>", "#00bcd4", "accionAbril()")}
                ${this.crearBotonPreventivo("MANTTO. D. FESTIVOS", "<span id='valor-mantto-festivos'>...</span>", "#e91e63", "accionFestivos()")}
            </div>
        </div>`;

        this.inicializarGrafico(cumplimiento);

        cargarPreventivosHoy();
        cargarPendientesAntesHoy();
        cargarManttoAbril();
        cargarManttoDiciembre();
        cargarExtraordinarios();
        cargarManttoFestivos();
    },

    crearBotonPreventivo: function(label, valor, color, funcion) {
        return `
        <button 
            onclick="${funcion}"
            style="display: flex; align-items: center; justify-content: space-between; background-color: transparent; border: 1px solid ${color}; border-radius: 6px; padding: 4px 12px; height: 28px; width: 100%; cursor: pointer; transition: all 0.1s ease;"
            onmousedown="this.style.transform='scale(1.05)';"
            onmouseup="this.style.transform='scale(1)';"
            onmouseleave="this.style.transform='scale(1)';"
        >
            <span style="color: white; font-size: 12px; font-weight: bold; text-transform: uppercase;">${label}</span>
            <span style="color: ${color}; font-size: 14px; font-weight: 900;">${valor}</span>
        </button>`;
    },

    inicializarGrafico: function(porcentaje) {
        const ctx = document.getElementById('chart-cumplimiento');
        if (!ctx) return;
        const chartExistente = Chart.getChart("chart-cumplimiento");
        if (chartExistente) chartExistente.destroy();

        // --- LÓGICA DE COLORES SOLICITADA ---
        let colorDinamico = '#28a745'; // Verde por defecto (80-100%)
        
        if (porcentaje <= 50) {
            colorDinamico = '#da291c'; // Rojo (0-50%)
        } else if (porcentaje <= 80) {
            colorDinamico = '#f9b218'; // Amarillo (51-80%)
        }
        // ------------------------------------

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [porcentaje, 100 - porcentaje],
                    backgroundColor: [colorDinamico, 'rgba(255,255,255,0.1)'],
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

/* ================= FUNCIONES GOOGLE SHEETS ================= */

async function obtenerValorCeldaSimple(sheetId, gid, range) {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?gid=${gid}&range=${range}&tqx=out:json`;
    const response = await fetch(url);
    const text = await response.text();
    const json = JSON.parse(text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1));
    return json.table.rows[0]?.c[0]?.v || 0;
}

async function cargarPreventivosHoy() {
    try {
        const valor = await obtenerValorCeldaSimple("16gfm9ZgivtCcpuRKpZQVuxfMcT2_fjpll5w8insJ3jg", 0, "F2");
        const span = document.getElementById("valor-preventivos-hoy");
        if (span) span.textContent = parseFloat(valor) || 0;
    } catch (e) { console.error("Error en Hoy:", e); }
}

async function cargarPendientesAntesHoy() {
    try {
        const valor = await obtenerValorCeldaSimple("16gfm9ZgivtCcpuRKpZQVuxfMcT2_fjpll5w8insJ3jg", 0, "E2");
        const span = document.getElementById("valor-pendientes-antes-hoy");
        if (span) span.textContent = parseFloat(valor) || 0;
    } catch (e) { console.error("Error en Pendientes:", e); }
}

async function obtenerMaxColumnaA(sheetId, gid) {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?gid=${gid}&tqx=out:json&tq=select A`;
    const response = await fetch(url);
    const text = await response.text();
    const json = JSON.parse(text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1));
    if (!json.table.rows) return 0;
    const valores = json.table.rows.map(r => parseFloat(r.c[0]?.v)).filter(v => !isNaN(v));
    return valores.length ? Math.max(...valores) : 0;
}

async function cargarManttoDiciembre() {
    try {
        const maxA = await obtenerMaxColumnaA("1e-mg7DX-D2DZiK38Fk0RKt9Wnt2I4sOs0Tpgv-o3sy0", 0);
        document.getElementById("valor-mantto-diciembre").textContent = maxA;
    } catch (e) { console.error(e); }
}

async function cargarExtraordinarios() {
    try {
        const maxA = await obtenerMaxColumnaA("15wGYNgEpeHFaOVSj7I92TCrzCWrcOKxxO8REh2hHrpc", 0);
        document.getElementById("valor-extraordinarios").textContent = maxA;
    } catch (e) { console.error(e); }
}

async function cargarManttoFestivos() {
    try {
        const maxA = await obtenerMaxColumnaA("1dPkdMVafnkCUV9HMt5PVCz94gw14Of3BnPt3WZ4iL5U", 0);
        document.getElementById("valor-mantto-festivos").textContent = maxA;
    } catch (e) { console.error(e); }
}

async function cargarManttoAbril() {
    try {
        const sId = "1sySN3ckuUjiYLTEbqxVA2LOtAjkp2moX2HKR2UR0ha4";
        const valorSatex = await obtenerValorCeldaSimple(sId, 0, "N1");
        const valorExterno = await obtenerValorCeldaSimple(sId, 1266295995, "L1");
        document.getElementById("valor-mantto-abril").textContent =
            (parseFloat(valorSatex) || 0) + (parseFloat(valorExterno) || 0);
    } catch (e) { console.error(e); }
}

/* ================= ACCIONES BOTONES ================= */

function accionProcedimientos() {
    window.open("https://docs.google.com/spreadsheets/d/1bDPlAnYnT9PWJwcG-jhtxON_Uv2Qzd8IWR5geLJn8mc/edit?usp=sharing", "_blank");
}

function accionLeccionesAprendidas() {
    window.open("https://docs.google.com/spreadsheets/d/1VaQVQ3QJmYSUKDl26KWlbVyZaew1zVjf029NnjGC168/edit?usp=sharing", "_blank");
}

function accionPreventivosHoy() {
    const nuevaVentana = window.open("", "_blank");
    nuevaVentana.document.write(`<html><body style="margin:0;background:#1e1e1e;">
    <iframe src="https://calendar.google.com/calendar/embed?src=mantto.programado.satex%40gmail.com&ctz=America%2FMexico_City"
    style="width:100%;height:100vh;border:0;"></iframe></body></html>`);
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

function accionFestivos() {
    window.open("https://docs.google.com/spreadsheets/d/1dPkdMVafnkCUV9HMt5PVCz94gw14Of3BnPt3WZ4iL5U/edit?gid=0#gid=0", "_blank");
}

function accionPendientes() {
    window.open("https://docs.google.com/spreadsheets/d/16gfm9ZgivtCcpuRKpZQVuxfMcT2_fjpll5w8insJ3jg/edit?gid=899933574#gid=899933574", "_blank");
}
