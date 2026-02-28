const SatexComprasPendientesDesign = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;
        const contenido = datos.map(d => `
            <div style="display: grid; grid-template-columns: 3fr 1fr; color: white; font-size: 11px; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 3px 0;">
                <span>${d.articulo}</span>
                <span style="color: #ff9999; text-align: right; font-weight: bold;">${d.dias}d</span>
            </div>
        `).join('');
        container.innerHTML = `<div style="padding: 5px; height: 100%; overflow-y: auto;">${contenido}</div>`;
    }
};
