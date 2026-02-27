const SatexCardasDesign = {
    crearEstructura: function(numero) {
        return `
        <div style="min-width: 220px; max-width: 220px; background: white; border-radius: 12px; padding: 20px; margin: 10px; box-shadow: 0 6px 12px rgba(0,0,0,0.4); flex-shrink: 0; display: flex; flex-direction: column; align-items: center;">
            <div style="color: #003366; font-weight: bold; font-size: 18px; margin-bottom: 10px; font-family: 'Segoe UI', sans-serif;">Carda ${numero}</div>
            <div style="width: 100%; height: 130px; position: relative; display: block;">
                <canvas id="gauge-${numero}"></canvas>
            </div>
            <div style="text-align: center; margin-top: 15px; font-family: 'Segoe UI', sans-serif;">
                <div style="font-size: 20px; font-weight: bold; color: #333;">Ac. 0</div>
                <div style="font-size: 13px; color: #777; font-weight: bold;">Max. 1000</div>
            </div>
        </div>`;
    }
};
