const SatexEstatusData = {
    actualizar: function(hCont, hOe, hCon, mParadas) {
        const container = document.getElementById('data-husos-container');
        const crearBloque = (label, valor, color = "#f9b218", unidad = "Husos") => `
        <div style="background: #3c546d; border-left: 3px solid ${color}; padding: 2px 10px; min-width: 140px; height: 45px; display: flex; flex-direction: column; justify-content: center;">
            <span style="color: #a1b1c1; font-size: 12px; font-weight: bold; text-transform: uppercase; line-height: 1.1;">${label}</span>
            <div style="display: flex; align-items: baseline; gap: 5px;">
                <span style="color: ${color}; font-size: 28px; font-weight: bold; line-height: 1;">${valor}</span>
                <span style="color: ${color}; font-size: 14px; font-weight: bold; opacity: 0.8;">${unidad}</span>
            </div>
        </div>`;

        if (container) {
            container.innerHTML =
            crearBloque("Continuas (Inact.)", hCont) +
            crearBloque("Open-end (Inact.)", hOe) +
            crearBloque("Coneras (Inact.)", hCon) +
            crearBloque("Máquinas paradas", mParadas, "#da291c", "");
        }
    }
};
