const SatexCardasDesign = {
    crearCarda: function(id, titulo, actual, maximo) {
        // Se redujeron las dimensiones (130x175) y paddings para compactar la carátula
        // El gráfico (canvas) y las fuentes se mantienen intactos.
        return `
        <div id="carda-${id}" style="min-width: 130px; height: 175px; background: white; border-radius: 8px; margin: 5px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding: 5px 5px 2px 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 2px solid #2f5577; box-sizing: border-box;">
            <div style="color: #003366; font-weight: bold; font-size: 14px; margin-bottom: 2px; text-transform: uppercase;">${titulo}</div>
            <canvas id="canvas-${id}" width="120" height="85"></canvas>
            <div style="margin-top: 2px; text-align: center;">
                <div style="font-size: 13px; font-weight: bold; color: #333;">Ac. ${actual}</div>
                <div style="font-size: 13px; font-weight: bold; color: #cc0000;">Max. ${maximo}</div>
            </div>
        </div>`;
    }
};
