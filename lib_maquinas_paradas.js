const SatexMaquinasParadas = {
    render: function(id, datos) {
        const filas = datos.map(m => `
            <tr style="color: white; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 13px;">
                <td style="padding: 8px;">${m.tipo}</td>
                <td style="padding: 8px; text-align: center; font-weight: bold; color: #ff9999;">${m.numero}</td>
                <td style="padding: 8px; text-align: right;">${m.fechaParo}</td>
            </tr>
        `).join('');

        document.getElementById(id).innerHTML = `
            <div style="background: rgba(0,0,0,0.3); border: 1px solid #da291c; border-radius: 6px; padding: 10px; margin-bottom: 20px; max-width: 500px;">
                <div style="color: #ff9999; font-size: 12px; font-weight: bold; margin-bottom: 10px; text-transform: uppercase; display: flex; align-items: center;">
                    <span style="margin-right: 8px;">🚨</span> DETALLE DE MÁQUINAS PARADAS
                </div>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="color: #a1b1c1; font-size: 10px; text-align: left; text-transform: uppercase;">
                            <th style="padding: 5px; border-bottom: 1px solid #555;">Tipo Máquina</th>
                            <th style="padding: 5px; border-bottom: 1px solid #555; text-align: center;">Núm.</th>
                            <th style="padding: 5px; border-bottom: 1px solid #555; text-align: right;">Desde</th>
                        </tr>
                    </thead>
                    <tbody>${filas}</tbody>
                </table>
            </div>`;
    }
};
