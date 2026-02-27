const SatexHeader = {
    dibujar: function(id) {
        const hoy = new Date();
        const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
        const fechaTexto = hoy.toLocaleDateString('es-ES', opciones);
        
        document.getElementById(id).innerHTML = `
            <div class="header">
                <img src="logo.png.jpeg" alt="Logo Satex">
                <div class="titulo">Tablero Master Mantto. Satex Textil</div>
                <div class="fecha-header">${fechaTexto}</div>
            </div>`;
    }
};
