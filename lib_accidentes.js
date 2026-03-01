const SatexAccidentes = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;

        // Si no hay datos, mostramos la tabla vacía con encabezados
        const listaDatos = (datos && datos.length > 0) ? datos : [];

        let html = `
        <table style="width: 100%; border-collapse: collapse; color: white; font-family: 'Segoe UI', sans-serif; font-size: 11px; text-align: center;">
            <thead style="position: sticky; top: 0; background: #2f5577; border-bottom: 2px solid #ff9999; z-index: 10;">
                <tr>
                    <th style="padding: 4px; width: 8%; border: 1px solid rgba(255,255,255,0.2);">Item</th>
                    <th style="padding: 4px; width: 37%; border: 1px solid rgba(255,255,255,0.2);">Nombre del Involucrado</th>
                    <th style="padding: 4px; width: 20%; border: 1px solid rgba(255,255,255,0.2);">Puesto</th>
                    <th style="padding: 4px; width: 20%; border: 1px solid rgba(255,255,255,0.2);">Fecha de Accidente</th>
                    <th style="padding: 4px; width: 15%; border: 1px solid rgba(255,255,255,0.2);">Dias de Incapacitado</th>
                </tr>
            </thead>
            <tbody>`;

        if (listaDatos.length === 0) {
            html += `<tr><td colspan="5" style="padding: 10px; color: #aaa;">Esperando datos de Excel...</td></tr>`;
        } else {
            html += listaDatos.map(acc => `
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 4px; border: 1px solid rgba(255,255,255,0.1);">${acc.item}</td>
                    <td style="padding: 4px; text-align: left; border: 1px solid rgba(255,255,255,0.1); font-weight: 500;">${acc.nombre}</td>
                    <td style="padding: 4px; border: 1px solid rgba(255,255,255,0.1);">${acc.puesto}</td>
                    <td style="padding: 4px; border: 1px solid rgba(255,255,255,0.1);">${acc.fecha}</td>
                    <td style="padding: 4px; font-weight: bold; color: #ff4444; border: 1px solid rgba(255,255,255,0.1);">${acc.dias}</td>
                </tr>`).join('');
        }

        html += `</tbody></table>`;
        container.innerHTML = html;
    }
};
