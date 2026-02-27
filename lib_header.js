const SatexHeader = {
    dibujar: function(id) {
        const hoy = new Date();
        document.getElementById(id).innerHTML = `
            <div class="header-satex">
                <img src="logo.png.jpeg" alt="Logo" style="height:40px;">
                <div class="titulo-principal">TABLERO MASTER MANTTO. SATEX TEXTIL</div>
                <div style="font-size:13px; min-width:150px; text-align:right;">${hoy.toLocaleDateString()}</div>
            </div>`;
    }
};
