const SatexCardasDesign = {
    crearEstructura: function(numero, ac, max) {
        // Cálculo de rotación de aguja basado en máximo de 140% (180 grados totales)
        const rotacion = ((ac / (max * 1.4)) * 180) - 90;
        const rotacionFinal = rotacion > 90 ? 90 : rotacion; // Límite visual

        return `
        <div style="min-width: 170px; max-width: 170px; background: white; border-radius: 8px; padding: 10px; margin: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); flex-shrink: 0; display: flex; flex-direction: column; align-items: center; border: 1px solid #ddd;">
            <div style="color: #003366; font-weight: bold; font-size: 12px; margin-bottom: 5px; font-family: sans-serif;">Carda ${numero}</div>
            <div style="width: 100%; height: 85px; position: relative;">
                <canvas id="gauge-${numero}"></canvas>
                <div style="position: absolute; bottom: 8px; left: 50%; width: 2px; height: 35px; background: #333; transform-origin: bottom center; transform: translateX(-50%) rotate(${rotacionFinal}deg); border-radius: 2px; transition: transform 0.5s ease;"></div>
            </div>
            <div style="text-align: center; margin-top: 5px; font-family: sans-serif;">
                <div style="font-size: 15px; font-weight: bold; color: #333;">Ac. ${ac}</div>
                <div style="font-size: 10px; color: #777; font-weight: bold;">Max. ${max}</div>
            </div>
        </div>`;
    }
};
