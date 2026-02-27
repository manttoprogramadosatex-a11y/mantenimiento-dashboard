const SatexEstatus = {
    dibujar: function(id) {
        document.getElementById(id).innerHTML = `
            <div class="seccion-estatus">
                <div class="etiqueta-planta">ESTATUS<br>PLANTA ▶</div>
                <div class="contenedor-bloques">
                    <div class="bloque-dato">
                        <span class="dato-etiqueta">HUSOS CONTINUAS (INACT.)</span>
                        <span class="dato-valor" id="h-cont">20</span>
                    </div>
                    <div class="bloque-dato">
                        <span class="dato-etiqueta">HUSOS OPEN-END (INACT.)</span>
                        <span class="dato-valor" id="h-oe">4</span>
                    </div>
                    <div class="bloque-dato">
                        <span class="dato-etiqueta">HUSOS CONERAS (INACT.)</span>
                        <span class="dato-valor" id="h-con">0</span>
                    </div>
                    <div class="bloque-dato box-paradas">
                        <span class="dato-etiqueta">MÁQUINAS PARADAS</span>
                        <span class="dato-valor" id="total-p" style="color:#ff9999">2</span>
                    </div>
                </div>
                <div class="scroll-paradas" id="listaParadas">
                    <div class="item-parada"><strong>Regulador 10</strong><div class="dias-badge">21 Días</div></div>
                    <div class="item-parada"><strong>Regulador 2</strong><div class="dias-badge">0 Días</div></div>
                </div>
                <div style="color: #00d4ff; font-size: 10px; font-weight: bold; text-align: right; margin-left: auto;">
                    Actualizado:<br><span id="last-sync">Sincronizado</span>
                </div>
                <button class="btn-refresh" onclick="location.reload()">X</button>
            </div>`;
    }
};
