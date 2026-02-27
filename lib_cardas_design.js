const SatexCardasDesign = {
    crearEstructura: function(numero) {
        return `
        <div class="carda-item" style="min-width: 200px; max-width: 200px; background: white; border-radius: 8px; padding: 15px; margin: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); flex-shrink: 0; display: flex; flex-direction: column; align-items: center;">
            <div style="color: #003366; font-weight: bold; font-size: 16px; margin-bottom: 10px; font-family: sans-serif;">Carda ${numero}</div>
            <div style="width: 100%; height: 120px; position: relative;">
                <canvas id="gauge-${numero}"></canvas>
            </div>
            <div style="text-align: center; margin-top: 10px; font-family: sans-serif;">
                <div style="font-size: 18px; font-weight: bold; color: #333;">Ac. 0</div>
                <div style="font-size: 12px; color: #666; font-weight: bold;">Max. 1000</div>
            </div>
        </div>`;
    }
};
