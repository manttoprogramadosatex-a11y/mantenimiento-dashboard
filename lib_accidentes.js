/* lib_accidentes.js */
const SatexAccidentes = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;

        const filas = datos.map(a => `
            <div style="display: grid; grid-template-columns: 30px 1fr 1fr 1fr 60px; color: white; font-size: 12px; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.1); align-items: center; min-height: 40px;">
                <span style="text-align: center; color: #f9b218;">${a.item}</span>
                <span style="padding-left: 5px;">${a.nombre}</span>
                <span style="text-align: center; opacity: 0.8;">${a.puesto}</span>
                <span style="text-align: center;">${a.fecha}</span>
                <span style="text-align: center; color: #ff9999; font-weight: bold;">${a.dias}d</span>
            </div>`).join('');

        container.innerHTML = `
            <div style="width: 100%; height: 100%; overflow-y: auto;">
                ${filas}
            </div>`;
    }
};
