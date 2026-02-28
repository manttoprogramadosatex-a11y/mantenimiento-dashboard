const SatexAccidentes = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;

        if (!datos || datos.length === 0) {
            container.innerHTML = `<div style="color: #4caf50; text-align: center; padding: 20px; font-size: 12px; font-weight: bold;">SIN ACCIDENTES REGISTRADOS</div>`;
            return;
        }

        let html = `
        <table style="width: 100%; border-collapse: collapse; color: white; font-size: 11px;">
            <thead style="background: rgba(255,255,255,0.05); position: sticky; top: 0;">
                <tr>
                    <th style="padding: 4px; border-bottom: 1px solid #ff9999; text-align: left;">Item</th>
                    <th style="padding: 4px; border-bottom: 1px solid #ff9999; text-align: left;">Nombre</th>
                    <th style="padding: 4px; border-bottom: 1px solid #ff9999; text-align: left;">Puesto</th>
                    <th style="padding: 4px; border-bottom: 1px solid #ff9999; text-align: center;">Fecha</th>
                    <th style="padding: 4px; border-bottom: 1px solid #ff9999; text-align: center;">Días</th>
                </tr>
            </thead>
            <tbody>`;

        datos.forEach(acc => {
            html += `
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                    <td style="padding: 4px; color: #ff9999; font-weight: bold;">${acc.item}</td>
                    <td style="padding: 4px;">${acc.nombre}</td>
                    <td style="padding: 4px; color: #a1b1c1;">${acc.puesto}</td>
                    <td style="padding: 4px; text-align: center;">${acc.fecha}</td>
                    <td style="padding: 4px; text-align: center; color: #ff4444; font-weight: bold;">${acc.dias}</td>
                </tr>`;
        });

        html += `</tbody></table>`;
        container.innerHTML = html;
    }
};
