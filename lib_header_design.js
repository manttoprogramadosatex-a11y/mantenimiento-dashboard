const SatexHeaderDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;

        // Se añadió "HILATURA" al final y se aseguró el centrado del texto
        container.innerHTML = `
        <div style="background-color: #002147; height: 60px; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; border-bottom: 2px solid #f9b218; box-sizing: border-box;">
            
            <div style="width: 200px;">
                <img src="logo.png.jpeg" alt="Satex Logo" style="height: 45px; display: block;">
            </div>

            <div style="flex-grow: 1; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; font-family: 'Segoe UI', sans-serif;">
                    TABLERO MASTER MANTTO. SATEX TEXTIL HILATURA
                </h1>
            </div>

            <div id="header-reloj" style="width: 200px; color: #f9b218; text-align: right; font-weight: bold; font-size: 16px; font-family: 'Segoe UI', sans-serif;">
                ${this.obtenerFecha()}
            </div>
        </div>`;
    },

    obtenerFecha: function() {
        const ahora = new Date();
        const opciones = { day: '2-digit', month: 'short', year: 'numeric' };
        return ahora.toLocaleDateString('es-ES', opciones).replace('.', '').toUpperCase();
    }
};
