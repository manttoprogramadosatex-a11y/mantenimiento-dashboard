/* lib_correctivo_kpi_design.js */
/* VERSION 1.1 - Aumento tipografía indicadores KPI */

const SatexCorrectivoKPIDesign = {
    render: function(id, mtbf, mttr, os) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 8px; height: 100%; justify-content: center;">
            <div style="display: flex; gap: 8px;">
                ${this.caja("MTBF", mtbf)}
                ${this.caja("MTTR", mttr)}
            </div>
            ${this.caja("OS ABIERTAS", os)}
        </div>`;
    },

    caja: function(label, val) {
        return `
        <div style="flex: 1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 8px; display: flex; justify-content: space-between; align-items: center;">
            <span style="color: #a1b1c1; font-size: 12px; font-weight: bold;">
                ${label}
            </span>
            <span style="color: #ffffff; font-size: 22px; font-weight: bold; font-family: monospace;">
                ${val.toString().padStart(3, '0')}
            </span>
        </div>`;
    }
};
