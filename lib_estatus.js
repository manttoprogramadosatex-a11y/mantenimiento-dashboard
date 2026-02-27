const SatexEstatus = {
    dibujar: function(id) {
        document.getElementById(id).innerHTML = `
            <div class="seccion-estatus">
                <div class="etiqueta-planta">
                    Estatus planta<br>
                    <span class="info-cardas-txt">Info. Cardas ▶</span>
                </div>
                <div class="contenedor-bloques">
                    <div class="bloque-dato">
                        <span class="dato-etiqueta">Continuas (Inact.)</span>
                        <span class="dato-valor" id="h-cont">0</span>
                    </div>
                    <div class="bloque-dato">
                        <span class="dato-etiqueta">Open-end (Inact.)</span>
                        <span class="dato-valor" id="h-oe">0</span>
                    </div>
                    <div class="bloque-dato">
                        <span class="dato-etiqueta">Coneras (Inact.)</span>
                        <span class="dato-valor" id="h-con">0</span>
                    </div>
                    <div class="bloque-dato box-paradas">
                        <span class="dato-etiqueta">Máquinas paradas</span>
                        <span class="dato-valor" id="total-p" style="color:#ff9999">0</span>
                    </div>
                </div>
                <div style="margin-left: auto; color: #00d4ff; font-size: 11px; font-weight: bold; text-align: right; padding-right: 15px;">
                    Actualizado:<br><span id="last-sync">Simulando...</span>
                </div>
                <button class="btn-refresh" onclick="location.reload()">X</button>
            </div>`;
    }
};
