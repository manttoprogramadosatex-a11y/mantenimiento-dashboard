const SatexCardasDesign = {
    crearEstructura: function(numero, ac, max) {
        // Escala visual hasta 140%
        const escalaVisual = max * 1.4;
        const rotacion = ((ac / escalaVisual) * 180) - 90;
        const rotacionFinal = rotacion > 90 ? 90 : (rotacion < -90 ? -90 : rotacion);

        return `
        <div style="min-width: 123px; max-width: 123px; background: white; border-radius: 8px; padding: 10px; margin: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); flex-shrink: 0; display: flex; flex-direction: column; align-items: center; border: 1px solid #ddd; font-family: 'Segoe UI', sans-serif;">
            <div style="color: #003366; font-weight: bold; font-size: 11px; margin-bottom: 5px;">Carda ${numero}</div>
            <div style="width: 100%; height: 75px; position: relative; display: flex; justify-content: center; align-items: flex-end;">
                <canvas id="gauge-${numero}"></canvas>
                <div id="needle-${numero}" style="position: absolute; bottom: 8px; left: 50%; width: 3px; height: 48px; background: #222; transform-origin: bottom center; transform: translateX(-50%) rotate(${rotacionFinal}deg); border-radius: 3px; transition: transform 0.8s ease-out; z-index: 10; box-shadow: 0 2px 3px rgba(0,0,0,0.4);"></div>
                <div style="position: absolute; bottom: 4px; left: 50%; width: 10px; height: 10px; background: #222; border-radius: 50%; transform: translateX(-50%); z-index: 11;"></div>
            </div>
            <div style="text-align: center; margin-top: 8px; line-height: 1.2;">
                <div style="font-size: 15px; font-weight: bold; color: #333;">Ac. ${ac}</div>
                <div style="font-size: 10px; color: #666; font-weight: bold;">Max. ${max}</div>
            </div>
        </div>`;
    }
};
