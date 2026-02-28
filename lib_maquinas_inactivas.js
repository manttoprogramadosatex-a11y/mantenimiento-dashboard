const SatexMaquinasInactivas = {
    render: function(id, maquinas) {
        const container = document.getElementById(id);
        if (!container) return;

        if (maquinas.length === 0) {
            container.innerHTML = `<div style="color: #4caf50; padding: 10px; text-align: center; font-size: 12px;">Todas las máquinas operativas</div>`;
            return;
        }

        let html = '<table style="width: 100%; border-collapse: collapse; color: white; font-size: 11px;">';
        maquinas.forEach((m, index) => {
            html += `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 4px; color: #f9b218; font-weight: bold; width: 20px;">${index + 1}</td>
                <td style="padding: 4px;">${m.nombre}</td>
                <td style="padding: 4px; text-align: right; color: #ff4444; font-weight: bold;">${m.estatus}</td>
            </tr>`;
        });
        html += '</table>';
        container.innerHTML = html;
    }
};
