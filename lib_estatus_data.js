const SatexEstatusData = {
    actualizar: function(hCont, hOe, hCon, mParadas) {
        const container = document.getElementById('data-husos-container');
        const crearBloque = (label, valor, color = "#f9b218") => `
            <div style="background: #3c546d; border-left: 4px solid ${color}; padding: 2px 12px; min-width: 140px; height: 38px; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                <span style="color: #a1b1c1; font-size: 10px; font-weight: bold; margin-bottom: -1px;">${label}</span>
                <span style="color: ${color}; font-size: 22px; font-weight: bold; line-height: 1;">${valor}</span>
            </div>`;
        
        container.innerHTML = 
            crearBloque("Continuas (Inact.)", hCont) +
            crearBloque("Open-end (Inact.)", hOe) +
            crearBloque("Coneras (Inact.)", hCon) +
            crearBloque("Máquinas paradas", mParadas, "#da291c");
    }
};
