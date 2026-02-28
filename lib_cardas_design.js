/* lib_cardas_design.js */
const SatexCardasDesign = {
    crearCarda: function(id, titulo, actual, maximo) {
        return `
        <div id="carda-${id}" style="min-width: 135px; height: 170px; background: #ffffff; border-radius: 6px; margin: 0 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.5); border: 1px solid #000; box-sizing: border-box; flex-shrink: 0;">
            <div style="color: #003366; font-weight: 900; font-size: 12px; margin-bottom: 4px;">${titulo}</div>
            <canvas id="canvas-${id}" width="110" height="75"></canvas>
            <div style="margin-top: 4px; text-align: center;">
                <div style="font-size: 12px; font-weight: bold; color: #111;">Ac. ${actual}</div>
                <div style="font-size: 12px; font-weight: bold; color: #d00;">Max. ${maximo}</div>
            </div>
        </div>`;
    }
};
