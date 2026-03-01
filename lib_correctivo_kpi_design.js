/* lib_correctivo_kpi_design.js */
/* VERSION 1.2
   - MTBF y MTTR en azul técnico (#00e0ff)
   - OS ABIERTAS en rojo
   - Número de OS centrado visualmente
   - No se modifican dimensiones ni estructura
*/

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

        let labelColor = "#a1b1c1";
        let valueColor = "#ffffff";
        let justifyMode = "space-between";

        // MTBF y MTTR en azul técnico
        if (label === "MTBF" || label === "MTTR") {
            valueColor = "#00e0ff";
        }

        // OS ABIERTAS en rojo y número centrado
        if (label === "OS ABIERTAS") {
            labelColor = "#ff4d4d";
            valueColor = "#ff4d4d";
            justifyMode = "space-between";
        }

        return `
        <div style="
            flex: 1;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px;
            padding: 8px;
            display: flex;
            justify-content: ${justifyMode};
            align-items: center;
        ">
            <span style="
                color: ${labelColor};
                font-size: 12px;
                font-weight: bold;
            ">
                ${label}
            </span>

            <span style="
                flex:1;
                text-align:center;
                color: ${valueColor};
                font-size: 22px;
                font-weight: bold;
                font-family: monospace;
            ">
                ${val.toString().padStart(3, '0')}
            </span>
        </div>`;
    }
};
