const SatexCardasDesign = {
    crearEstructura: function(numero, ac, max) {
        // Escala visual hasta 140%
        const escalaVisual = max * 1.4;
        const rotacion = ((ac / escalaVisual) * 180) - 90;
        // Limitar la aguja para que no de la vuelta completa si supera el 140%
        const rotacionFinal = rotacion > 90 ? 90 : (rotacion < -90 ? -90 : rotacion);

        return `
        <div style="min-width: 165px; max-width: 165px; background: white; border-radius: 10px; padding: 12px; margin: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); flex-shrink: 0; display: flex; flex-direction: column; align-items: center; border: 1px solid #eee; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <div style="color: #003366; font-weight: bold; font-size: 14px; margin-bottom: 8px;">Carda ${numero}</div>
            <div style="width: 100%; height: 95px; position: relative; display: flex; justify-content: center;">
                <canvas id="gauge-${numero}"></canvas>
                <div style="position: absolute; bottom: 10px; left: 50%; width: 2px; height: 42px; background: #222; transform-origin: bottom center; transform: translateX(-50%) rotate(${rotacionFinal}deg); border-radius: 2px; transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1); z-index: 5;"></div>
                <div style="position: absolute; bottom: 6px; left: 50%; width: 8px; height: 8px; background: #222; border-radius: 50%; transform: translateX(-50%); z-index: 6;"></div>
            </div>
            <div style="text-align: center; margin-top: 10px;">
                <div style="font-size: 18px; font-weight: bold; color: #333;">Ac. ${ac}</div>
                <div style="font-size: 11px; color: #666; font-weight: bold;">Max. ${max}</div>
            </div>
        </div>`;
    }
};
