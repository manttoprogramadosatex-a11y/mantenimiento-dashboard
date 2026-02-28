const SatexMaquinasInactivas = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;
        
        let html = "";
        datos.forEach(m => {
            html += `
            <div style="display: flex; color: white; font-size: 11px; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 2px 0; align-items: center; font-family: Calibri;">
                <div style="width: 20%; text-align: center; font-weight: bold;">${m.tipo}</div>
                <div style="width: 20%; text-align: center; color: #ff8c69;">${m.num}</div>
                <div style="width: 35%; text-align: center;">${m.desde}</div>
                <div style="width: 25%; text-align: center; color: #ff4444; font-weight: bold;">${m.dias}</div>
            </div>`;
        });
        container.innerHTML = html;
    }
};
