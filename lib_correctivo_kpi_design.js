const SatexCorrectivoKPIDesign = {
    render: function(id, mtbf, mttr, os) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="display: flex; justify-content: space-around; width: 100%; gap: 5px; padding: 5px 0;">
            ${this.crearCaja("MTBF H. M.", mtbf)}
            ${this.crearCaja("MTTR H. M.", mttr)}
            ${this.crearCaja("OS ABIERTAS", os)}
        </div>`;
    },

    crearCaja: function(label, valor) {
        return `
        <div style="flex: 1; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; padding: 4px; text-align: center;">
            <div style="color: #a1b1c1; font-size: 8px; font-weight: bold; text-transform: uppercase; margin-bottom: 2px;">${label}</div>
            <div style="color: #ffffff; font-size: 18px; font-weight: bold; font-family: 'Courier New', monospace;">
                ${valor.toString().padStart(3, '0')}
            </div>
        </div>`;
    }
};
