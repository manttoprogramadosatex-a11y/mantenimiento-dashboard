const SatexEstatus = {
    dibujar: function(id) {
        document.getElementById(id).innerHTML = `
            <div class="seccion-estatus">
                <div class="etiqueta-planta">Estatus planta<br><span style="font-size:0.9em; opacity:0.8;">Info. Cardas</span> ▶</div>
                <div class="contenedor-bloques">
                    <div class="bloque-dato">
                        <span class="dato-etiqueta">Continuas (Inact.)</span>
                        <span class="dato-valor" id="h-cont">0</span>
                    </div>
                    <div class="bloque-dato">
                        <span class="dato-etiqueta">Open-End (Inact.)</span>
                        <span class="dato-valor" id="h-oe">0</span>
                    </div>
                    <div class="bloque-dato">
                        <span class="dato-etiqueta">Coneras (Inact.)</span>
                        <span class="dato-valor" id="h-con">0</span>
                    </div>
                    <div class="bloque-dato box-paradas">
                        <span class="dato-etiqueta">Máquinas Paradas</span>
                        <span class="dato-valor" id="total-p" style="color:#ff9999">0</span>
                    </div>
                </div>
                <button class="btn-refresh" onclick="location.reload()">X</button>
            </div>`;
    }
};
