const SatexEstatusData = {
    actualizar: function(hCont, hOe, hCon, mParadas) {
        const container = document.getElementById('data-husos-container');
        const crearBloque = (label, valor, color = "#f9b218") => `
            <div style="background: #3c546d; border-left: 5px solid ${color}; padding: 5px 15px; min-width: 155px; height: 50px; display: flex; flex-direction: column; justify-content: center; border-radius: 2px;">
                <span style="color: #a1b1c1; font-size: 11px; font-weight: bold; margin-bottom: 2px; text-transform: uppercase;">${label}</span>
                <span style="color: ${color}; font-size: 26px; font-weight: bold; line-height: 1;">${valor}</span>
            </div>`;
        
        container.innerHTML = 
            crearBloque("Continuas (Inact.)", hCont) +
            crearBloque("Open-end (Inact.)", hOe) +
            crearBloque("Coneras (Inact.)", hCon) +
            crearBloque("Máquinas paradas", mParadas, "#da291c");
    }
};
