const SatexEstatusData = {
    actualizar: function(hCont, hOe, hCon, mParadas) {
        const container = document.getElementById('data-husos-container');
        const crearBloque = (label, valor, color = "#f9b218") => `
            <div style="background: #3c546d; border-left: 3px solid ${color}; padding: 2px 10px; min-width: 125px; height: 42px; display: flex; flex-direction: column; justify-content: center;">
                <span style="color: #a1b1c1; font-size: 11px; font-weight: bold; text-transform: uppercase; line-height: 1.1;">${label}</span>
                <span style="color: ${color}; font-size: 24px; font-weight: bold; line-height: 1;">${valor}</span>
            </div>`;
        
        container.innerHTML = 
            crearBloque("Continuas (Inact.)", hCont) +
            crearBloque("Open-end (Inact.)", hOe) +
            crearBloque("Coneras (Inact.)", hCon) +
            crearBloque("Máquinas paradas", mParadas, "#da291c");
    }
};
