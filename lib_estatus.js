const SatexEstatus = {
    dibujar: function(id) {
        document.getElementById(id).innerHTML = `
            <div class="seccion-estatus">
                <div style="color:white; font-size:12px; font-weight:bold;">Estatus planta</div>
                <div class="bloque-dato"><span class="dato-etiqueta">Continuas (Inact.)</span><span class="dato-valor" id="h-cont">0</span></div>
                <div class="bloque-dato"><span class="dato-etiqueta">Open-end (Inact.)</span><span class="dato-valor" id="h-oe">0</span></div>
                <div class="bloque-dato" style="border-left-color:#da291c"><span class="dato-etiqueta">Máquinas paradas</span><span class="dato-valor" id="total-p" style="color:#ff9999">0</span></div>
                <button style="background:#da291c; color:white; border:none; width:25px; height:25px; border-radius:4px; margin-left:auto;" onclick="location.reload()">X</button>
            </div>`;
    }
};
