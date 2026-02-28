/* lib_maquinas_inactivas.js */
const SatexMaquinasInactivas = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;
        const tabla = datos.map(m => `
            <div style="display: grid; grid-template-columns: 1fr 1fr 1.5fr 1fr; color: white; font-size: 12px; padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,0.1); align-items: center;">
                <span style="font-weight: bold;">${m.tipo}</span>
                <span style="color: #ff9999; text-align: center;">${m.num}</span>
                <span style="text-align: center;">${m.fecha}</span>
                <span style="color: #f9b218; text-align: right; font-weight: bold;">${m.dias || '423'}d</span>
            </div>`).join('');

        container.innerHTML = `<div style="padding: 2px;">${tabla}</div>`;
    }
};
