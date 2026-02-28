const SatexCorrectivoKPIDesign = {
    render: function(id, mtbf, mttr, os) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr; gap: 4px; width: 100%;">
            <div style="display: flex; gap: 4px;">
                ${this.crearCaja("MTBF", mtbf)}
                ${this.crearCaja("MTTR", mttr)}
            </div>
            ${this.crearCaja("OS ABIERTAS", os)}
        </div>`;
    },

    crearCaja: function(label, valor) {
        return `
        <div style="flex: 1; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; padding: 2px 5px; display: flex; justify-content: space-between; align-items: center;">
            <div style="color: #a1b1c1; font-size: 9px; font-weight: bold; text-transform: uppercase;">${label}</div>
            <div style="color: #ffffff; font-size: 16px; font-weight: bold; font-family: 'Courier New', monospace;">
                ${valor.toString().padStart(3, '0')}
            </div>
        </div>`;
    }
};
