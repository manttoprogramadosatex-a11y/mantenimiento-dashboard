const SatexAccidentesDesign = {
    render: function(id, listaAccidentes = []) {
        const container = document.getElementById(id);
        if (!container) return;

        // Forzamos exactamente 5 filas para que el diseño no se pierda
        let filasHtml = "";
        for (let i = 0; i < 5; i++) {
            const acc = listaAccidentes[i] || { item: "", nombre: "", puesto: "", fecha: "", dias: "" };
            
            // Si el dato de días existe, lo ponemos en rojo negrita como el original
            const estiloDias = acc.dias ? 'color: #ff4d4d; font-weight: 900; font-size: 13px;' : 'color: white;';

            filasHtml += `
            <tr style="border-bottom: 1px solid rgba(255, 153, 153, 0.3); height: 32px;">
                <td style="color: white; font-size: 11px; text-align: center; font-weight: bold; width: 8%;">${acc.item || ""}</td>
                <td style="color: white; font-size: 11px; text-align: center; width: 42%;">${acc.nombre || ""}</td>
                <td style="color: white; font-size: 11px; text-align: center; width: 20%;">${acc.puesto || ""}</td>
                <td style="color: white; font-size: 11px; text-align: center; width: 15%;">${acc.fecha || ""}</td>
                <td style="text-align: center; width: 15%; ${estiloDias}">${acc.dias || ""}</td>
            </tr>`;
        }

        container.innerHTML = `
        <div style="width: 100%; font-family: 'Segoe UI', sans-serif; padding-top: 5px;">
            <div style="color: #ff9999; font-size: 14px; font-weight: bold; text-align: center; text-transform: uppercase; margin-bottom: 5px; letter-spacing: 1px;">
                ACCIDENTES
            </div>
            <table style="width: 100%; border-collapse: collapse; background: rgba(255, 255, 255, 0.03); border-radius: 4px; overflow: hidden;">
                <thead>
                    <tr style="background: rgba(255, 153, 153, 0.15); border-bottom: 2px solid #ff9999; height: 30px;">
                        <th style="color: white; font-size: 10px; text-transform: uppercase;">Item</th>
                        <th style="color: white; font-size: 10px; text-transform: uppercase;">Nombre del Involucrado</th>
                        <th style="color: white; font-size: 10px; text-transform: uppercase;">Puesto</th>
                        <th style="color: white; font-size: 10px; text-transform: uppercase;">Fecha</th>
                        <th style="color: white; font-size: 10px; text-transform: uppercase;">Días</th>
                    </tr>
                </thead>
                <tbody>
                    ${filasHtml}
                </tbody>
            </table>
        </div>`;
    }
};
