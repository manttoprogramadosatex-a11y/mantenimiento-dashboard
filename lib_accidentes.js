/* lib_accidentes.js */
const SatexAccidentes = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;

        const filas = datos.map(persona => `
            <div style="display: grid; grid-template-columns: 0.5fr 2.5fr 1.5fr 1.5fr 0.8fr; color: white; font-size: 12px; border-bottom: 1px solid rgba(255,255,255,0.08); padding: 5px 0; align-items: center;">
                <span style="text-align: center; opacity: 0.7;">${persona.item}</span>
                <span style="padding-left: 5px; font-weight: 500;">${persona.nombre}</span>
                <span style="text-align: center;">${persona.puesto}</span>
                <span style="text-align: center;">${persona.fecha}</span>
                <span style="color: #ff9999; text-align: center; font-weight: bold;">${persona.dias}d</span>
            </div>
        `).join('');

        container.innerHTML = `
            <div style="width: 100%; height: 100%; display: flex; flex-direction: column; font-family: 'Segoe UI', sans-serif;">
                <div style="display: grid; grid-template-columns: 0.5fr 2.5fr 1.5fr 1.5fr 0.8fr; color: #ff9999; font-size: 11px; font-weight: 900; text-transform: uppercase; padding-bottom: 4px; border-bottom: 2px solid #ff9999; position: sticky; top: 0; background: #2f5577; z-index: 10;">
                    <span style="text-align: center;">ID</span>
                    <span style="padding-left: 5px;">NOMBRE</span>
                    <span style="text-align: center;">PUESTO</span>
                    <span style="text-align: center;">FECHA ACC.</span>
                    <span style="text-align: center;">DÍAS</span>
                </div>
                <div style="flex-grow: 1; overflow-y: auto;">
                    ${filas}
                </div>
            </div>
        `;
    }
};
