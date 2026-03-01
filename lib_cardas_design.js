const SatexCardasDesign = {
    crearCarda: function(id, titulo, actual, maximo) {
        // Reducción de márgenes laterales a 2px para evitar scroll innecesario
        return `
        <div id="carda-${id}" style="min-width: 130px; height: 142px; background: white; border-radius: 8px; margin: 2px; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 0px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 2px solid #2f5577; box-sizing: border-box; overflow: hidden;">
            
            <div style="color: #003366; font-weight: bold; font-size: 14px; text-transform: uppercase; line-height: 1; margin-top: 2px;">
                ${titulo}
            </div>
            
            <div style="height: 85px; display: flex; align-items: center; margin: 0;">
                <canvas id="canvas-${id}" width="120" height="85"></canvas>
            </div>
            
            <div style="text-align: center; line-height: 1; margin-bottom: 2px;">
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
