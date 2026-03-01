const SatexEstatus = {
    dibujar: function(id) {
        document.getElementById(id).innerHTML = `
            <div class="seccion-estatus" style="
                padding: 0 20px; 
                display: flex; 
                align-items: center; 
                height: 50px; 
                background: rgba(0,0,0,0.15); 
                gap: 15px;
            ">
                <div style="color:white; font-size:13px; font-weight:bold; text-transform:none;">
                    Estatus planta
                </div>

                <div class="bloque-dato">
                    <span class="dato-etiqueta">Continuas (Inact.)</span>
                    <span class="dato-valor" id="h-cont">0</span>
                </div>

                <div class="bloque-dato">
                    <span class="dato-etiqueta">Open-end (Inact.)</span>
                    <span class="dato-valor" id="h-oe">0</span>
                </div>

                <div class="bloque-dato" style="border-left-color:#da291c">
                    <span class="dato-etiqueta">Máquinas paradas</span>
                    <span class="dato-valor" id="total-p" style="color:#ff9999">0</span>
                </div>

                <!-- BOTÓN SIN margin-left:auto -->
                <button style="
                    background:#da291c; 
                    color:white; 
                    border:none; 
                    width:28px; 
                    height:28px; 
                    border-radius:4px; 
                    cursor:pointer;
                " onclick="location.reload()">X</button>

            </div>`;
    }
};
