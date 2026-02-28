const SatexMaquinasInactivas = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;

        if (!datos || datos.length === 0) {
            container.innerHTML = `<div style="color: #666; text-align: center; padding: 5px; font-size: 14px;">Sin máquinas paradas</div>`;
            return;
        }

        container.innerHTML = datos.map(m => `
            <div style="display: flex; border-bottom: 1px solid rgba(255,68,68,0.2); color: white; font-size: 14px; padding: 3px 0; font-family: 'Segoe UI', sans-serif;">
                <div style="width: 25%; text-align: center;">${m.tipo}</div>
                <div style="width: 20%; text-align: center; font-weight: bold; color: #ff4444;">${m.num}</div>
                <div style="width: 35%; text-align: center;">${m.desde}</div>
                <div style="width: 20%; text-align: center;">${m.dias}</div>
            </div>
        `).join('');
    }
};
