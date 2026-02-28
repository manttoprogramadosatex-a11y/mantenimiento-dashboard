const SatexCardasDesign = {
    crearCarda: function(id, titulo, actual, maximo) {
        // Reducción extrema de altura a 155px compactando márgenes al mínimo
        return `
        <div id="carda-${id}" style="min-width: 130px; height: 155px; background: white; border-radius: 8px; margin: 5px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding: 1px 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 2px solid #2f5577; box-sizing: border-box;">
            
            <div style="color: #003366; font-weight: bold; font-size: 14px; margin-bottom: 0px; text-transform: uppercase; line-height: 1.2;">
                ${titulo}
            </div>
            
            <canvas id="canvas-${id}" width="120" height="85"></canvas>
            
            <div style="margin-top: 0px; text-align: center; line-height: 1.1;">
                <div style="font-size: 13px; font-weight: bold; color: #333;">
                    Ac. ${actual}
                </div>
                <div style="font-size: 13px; font-weight: bold; color: #cc0000;">
                    Max. ${maximo}
                </div>
            </div>
        </div>`;
    }
};
