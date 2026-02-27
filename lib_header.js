const SatexHeader = {
    dibujar: function(id) {
        const hoy = new Date();
        const fecha = hoy.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
        document.getElementById(id).innerHTML = `
            <div class="header-satex">
                <img src="logo.png.jpeg" alt="Logo">
                <div class="titulo-master">TABLERO MASTER MANTTO. SATEX TEXTIL</div>
                <div class="fecha-txt">${fecha}</div>
            </div>`;
    }
};
