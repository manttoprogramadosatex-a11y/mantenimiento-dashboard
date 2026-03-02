const SatexAccidentesDesign = {
    render: function(id, lista) {
        const container = document.getElementById(id);
        if (!container) return;

        // Asegurar al menos 5 casillas visibles para mantener la estética
        const registrosAMostrar = Math.max(lista.length, 5);
        let filasHtml = "";

        for (let i = 0; i < registrosAMostrar; i++) {
            const acc = lista[i] || { item: "", nombre: "", puesto: "", fecha: "", dias: "" };
            filasHtml += `
            <tr style="border-bottom: 1px solid rgba(255, 153, 153, 0.3); height: 35px;">
                <td style="color: white; font-size: 11px; text-align: center; font-weight: bold;">${acc.item}</td>
                <td style="color: white; font-size: 11px; text-align: center;">${acc.nombre}</td>
                <td style="color: white; font-size: 11px; text-align: center;">${acc.puesto}</td>
                <td style="color: white; font-size: 11px; text-align: center;">${acc.fecha}</td>
                <td style="color: #ff4d4d; font-size: 13px; text-align: center; font-weight: 900;">${acc.dias}</td>
            </tr>`;
        }

        container.innerHTML = `
        <div style="width: 100%; font-family: 'Segoe UI', sans-serif;">
            <div style="color: #ff9999; font-size: 14px; font-weight: bold; text-align: center; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 1px;">
                ACCIDENTES
            </div>
            <table style="width: 100%; border-collapse: collapse; background: rgba(0,0,0,0.2); border-radius: 5px; overflow: hidden;">
                <thead>
                    <tr style="background: rgba(255, 153, 153, 0.15); border-bottom: 2px solid #ff9999;">
                        <th style="color: white; font-size: 11px; padding: 8px; width: 10%;">Item</th>
                        <th style="color: white; font-size: 11px; padding: 8px; width: 40%;">Nombre del Involucrado</th>
                        <th style="color: white; font-size: 11px; padding: 8px; width: 20%;">Puesto</th>
                        <th style="color: white; font-size: 11px; padding: 8px; width: 15%;">Fecha de Accidente</th>
                        <th style="color: white; font-size: 11px; padding: 8px; width: 15%;">Dias de Incapacitado</th>
                    </tr>
                </thead>
                <tbody>
                    ${filasHtml}
                </tbody>
            </table>
        </div>`;
    }
};
