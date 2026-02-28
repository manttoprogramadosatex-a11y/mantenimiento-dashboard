/* lib_cardas_design.js */
const SatexCardasDesign = {
    crearCarda: function(id, titulo, actual, maximo) {
        return `
        <div id="carda-${id}" style="min-width: 130px; height: 170px; background: white; border-radius: 8px; margin: 0 5px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 1px solid #2f5577; box-sizing: border-box;">
            <div style="color: #003366; font-weight: bold; font-size: 12px; margin-bottom: 3px;">${titulo}</div>
            <canvas id="canvas-${id}" width="110" height="75"></canvas>
            <div style="margin-top: 3px; text-align: center;">
                <div style="font-size: 12px; font-weight: bold; color: #333;">Ac. ${actual}</div>
                <div style="font-size: 12px; font-weight: bold; color: #cc0000;">Max. ${maximo}</div>
            </div>
        </div>`;
    }
};
