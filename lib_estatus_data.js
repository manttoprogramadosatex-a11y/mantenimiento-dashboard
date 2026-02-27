const SatexEstatusData = {
    actualizar: function(hCont, hOe, hCon, mParadas) {
        const container = document.getElementById('data-husos-container');
        const crearBloque = (label, valor, color = "#f9b218") => `
            <div style="background: #3c546d; border-left: 3px solid ${color}; padding: 2px 10px; min-width: 105px; height: 40px; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
                <span style="color: #a1b1c1; font-size: 9px; font-weight: bold; font-family: sans-serif; white-space: nowrap;">${label}</span>
                <span style="color: ${color}; font-size: 20px; font-weight: bold; font-family: sans-serif; line-height: 1;">${valor}</span>
            </div>`;
        
        container.innerHTML = 
            crearBloque("Continuas (Inact.)", hCont) +
            crearBloque("Open-end (Inact.)", hOe) +
            crearBloque("Coneras (Inact.)", hCon) +
            crearBloque("Máquinas paradas", mParadas, "#da291c");
    }
};
