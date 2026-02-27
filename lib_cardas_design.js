const SatexCardasDesign = {
    crearEstructura: function(numero, ac, max) {
        const escalaVisual = max * 1.4;
        const rotacion = ((ac / escalaVisual) * 180) - 90;
        const rotacionFinal = rotacion > 90 ? 90 : (rotacion < -90 ? -90 : rotacion);

        return `
        <div style="min-width: 92px; max-width: 92px; background: white; border-radius: 6px; padding: 4px; margin: 2px; box-shadow: 0 2px 4px rgba(0,0,0,0.3); flex-shrink: 0; display: flex; flex-direction: column; align-items: center; border: 1px solid #ddd; font-family: sans-serif;">
            <div style="color: #003366; font-weight: bold; font-size: 9px; margin-bottom: 2px;">Carda ${numero}</div>
            <div style="width: 100%; height: 55px; position: relative; display: flex; justify-content: center; align-items: flex-end;">
                <canvas id="gauge-${numero}"></canvas>
                <div id="needle-${numero}" style="position: absolute; bottom: 6px; left: 50%; width: 3px; height: 38px; background: #222; transform-origin: bottom center; transform: translateX(-50%) rotate(${rotacionFinal}deg); border-radius: 3px; transition: transform 0.8s ease-out; z-index: 10;"></div>
                <div style="position: absolute; bottom: 3px; left: 50%; width: 8px; height: 8px; background: #222; border-radius: 50%; transform: translateX(-50%); z-index: 11;"></div>
            </div>
            <div style="text-align: center; margin-top: 2px; line-height: 1;">
                <div style="font-size: 11px; font-weight: bold; color: #333;">Ac. ${ac}</div>
                <div style="font-size: 8px; color: #666; font-weight: bold;">Max. ${max}</div>
            </div>
        </div>`;
    }
};
