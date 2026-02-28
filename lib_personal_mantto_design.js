const SatexPersonalManttoDesign = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;
        const contenido = datos.map(d => `
            <div style="display: grid; grid-template-columns: 1fr 3fr 1fr; color: white; font-size: 11px; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 3px 0;">
                <span style="color: #f9b218; font-weight: bold;">${d.id}</span>
                <span>${d.nombre}</span>
                <span style="text-align: right;">${d.estatus}</span>
            </div>
        `).join('');
        container.innerHTML = `<div style="padding: 5px; height: 100%; overflow-y: auto;">${contenido}</div>`;
    }
};
