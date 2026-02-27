const SatexEstatus = {
    dibujar: function(id) {
        document.getElementById(id).innerHTML = `
            <div class="seccion-estatus">
                <div class="etiqueta-planta">ESTATUS<br>PLANTA ▶</div>
                <div class="contenedor-bloques">
                    <div class="bloque-dato"><span class="dato-etiqueta">CONTINUAS (INACT.)</span><span class="dato-valor" id="h-cont">--</span></div>
                    <div class="bloque-dato"><span class="dato-etiqueta">OPEN-END (INACT.)</span><span class="dato-valor" id="h-oe">--</span></div>
                    <div class="bloque-dato"><span class="dato-etiqueta">CONERAS (INACT.)</span><span class="dato-valor" id="h-con">--</span></div>
                    <div class="bloque-dato box-paradas"><span class="dato-etiqueta">MÁQUINAS PARADAS</span><span class="dato-valor" id="total-p">--</span></div>
                </div>
                <div class="scroll-paradas" id="listaParadas"></div>
                <div class="info-sync">Actualizado:<br><span id="last-sync">...</span></div>
                <button class="btn-refresh" onclick="location.reload()">X</button>
            </div>`;
    }
};
