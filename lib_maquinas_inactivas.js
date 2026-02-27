const SatexMaquinasInactivas = {
    render: function(id, lista) {
        const filas = lista.map(m => `
            <tr style="color: white; font-size: 11px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 2px 0;">${m.tipo}</td>
                <td style="padding: 2px 0; text-align: center; color: #ff9999; font-weight: bold;">${m.numero}</td>
                <td style="padding: 2px 0; text-align: right; opacity: 0.8;">${m.desde}</td>
            </tr>`).join('');

        document.getElementById(id).innerHTML = `
            <div style="border: 1px solid #da291c; border-radius: 4px; padding: 5px 10px; background: rgba(0,0,0,0.2);">
                <div style="color: #ff9999; font-size: 9px; font-weight: bold; margin-bottom: 4px;">🚨 DETALLE DE PAROS</div>
                <table style="width: 100%; border-collapse: collapse; font-family: sans-serif;">
                    <tbody>${filas}</tbody>
                </table>
            </div>`;
    }
};
