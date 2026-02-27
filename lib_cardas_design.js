const SatexCardasDesign = {
    config: { width: 140, height: 185 },
    crearTarjetaHTML: function(i) {
        return `
            <div style="background:white; width:140px; height:185px; border-radius:8px; padding:10px; display:flex; flex-direction:column; align-items:center; box-shadow:0 4px 10px rgba(0,0,0,0.3); box-sizing:border-box;">
                <div style="font-family:sans-serif; font-size:12px; font-weight:bold; margin-bottom:5px;">Carda ${i}</div>
                <div style="width:120px; height:85px;"><canvas id="gauge-${i}"></canvas></div>
                <div style="text-align:center; margin-top:5px; font-family:sans-serif;">
                    <p style="font-size:14px; font-weight:bold; margin:0;" id="ac-${i}">Ac. 0</p>
                    <p style="font-size:10px; color:#666; margin:0;" id="max-${i}">Max. 1000</p>
                </div>
            </div>`;
    }
};
