/* lib_correctivo_kpi_design.js */
/* VERSION 1.3
   - MTBF renombrado a "MTBF. D."
   - MTTR renombrado a "MTTR. H."
   - Se mantienen colores personalizados
   - No se modifican dimensiones ni estructura
*/

const SatexCorrectivoKPIDesign = {
    render: function(id, mtbf, mttr, os) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 8px; height: 100%; justify-content: center;">
            <div style="display: flex; gap: 8px;">
                ${this.caja("MTBF. D.", mtbf)}
                ${this.caja("MTTR. H.", mttr)}
            </div>
            ${this.caja("OS ABIERTAS", os)}
        </div>`;
    },

    caja: function(label, val) {

        let labelColor = "#a1b1c1";
        let valueColor = "#ffffff";

        // MTBF y MTTR en azul técnico
        if (label === "MTBF. D." || label === "MTTR. H.") {
            valueColor = "#00e0ff";
        }

        // OS ABIERTAS en rojo
        if (label === "OS ABIERTAS") {
            labelColor = "#ff4d4d";
            valueColor = "#ff4d4d";
        }

        return `
        <div style="
            flex: 1;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 6px;
            padding: 8px;
            display: flex;
            justify-content: space-between;
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
