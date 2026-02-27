const SatexMaquinasInactivas = {
    render: function(id, listaMaquinas) {
        const contenedor = document.getElementById(id);
        let filas = listaMaquinas.map(m => `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); color: white; font-family: sans-serif; font-size: 12px;">
                <td style="padding: 5px;">${m.tipo}</td>
                <td style="padding: 5px; text-align: center;">${m.numero}</td>
                <td style="padding: 5px; text-align: right; color: #ff9999;">${m.desde}</td>
            </tr>
        `).join('');

        contenedor.innerHTML = `
            <div style="background: rgba(0,0,0,0.2); margin: 10px 15px; padding: 10px; border-radius: 4px; border: 1px solid #da291c;">
                <div style="color: #ff9999; font-size: 11px; font-weight: bold; margin-bottom: 8px; text-transform: uppercase;">Detalle de Máquinas Inactivas</div>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="color: #a1b1c1; font-size: 9px; text-align: left; border-bottom: 1px solid #a1b1c1;">
                            <th style="padding-bottom: 4px;">Tipo de Máquina</th>
                            <th style="padding-bottom: 4px; text-align: center;">Núm.</th>
                            <th style="padding-bottom: 4px; text-align: right;">Parada desde</th>
                        </tr>
                    </thead>
                    <tbody>${filas}</tbody>
                </table>
            </div>`;
    }
};
