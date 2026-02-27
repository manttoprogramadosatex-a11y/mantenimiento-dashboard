const SatexEstatus = {
    dibujar: function(id) {
        document.getElementById(id).innerHTML = `
            <div class="estatus-seccion">
                <div class="etiqueta-principal">
                    Estatus planta<br>
                    <span style="font-size:11px; font-weight:normal; opacity:0.8;">Info. Cardas ▶</span>
                </div>
                <div class="bloque-dato">
                    <span class="dato-titulo">Continuas (Inact.)</span>
                    <span class="dato-valor" id="h-cont">0</span>
                </div>
                <div class="bloque-dato">
                    <span class="dato-titulo">Open-end (Inact.)</span>
                    <span class="dato-valor" id="h-oe">0</span>
                </div>
                <div class="bloque-dato">
                    <span class="dato-titulo">Coneras (Inact.)</span>
                    <span class="dato-valor" id="h-con">0</span>
                </div>
                <div class="bloque-dato" style="border-left-color:#da291c">
                    <span class="dato-titulo">Máquinas paradas</span>
                    <span class="dato-valor" id="total-p" style="color:#ff9999">0</span>
                </div>
                <button style="background:#da291c; color:white; border:none; padding:8px 12px; border-radius:4px; margin-left:auto; cursor:pointer;" onclick="location.reload()">X</button>
            </div>`;
    }
};
