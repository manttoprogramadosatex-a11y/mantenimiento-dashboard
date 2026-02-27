const SatexHeader = {
    dibujar: function(id) {
        const hoy = new Date();
        const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
        const fechaFormateada = hoy.toLocaleDateString('es-ES', opciones);
        
        const contenedor = document.getElementById(id);
        
        // Estilos exclusivos para el encabezado (Protegidos)
        const html = `
            <div id="header-satex-protegido" style="
                background-color: #274a66; 
                display: flex; 
                align-items: center; 
                justify-content: space-between; 
                padding: 0 15px; 
                height: 60px; 
                color: white; 
                border-bottom: 2px solid #1e3a50; 
                box-sizing: border-box;
                width: 100%;
                flex-shrink: 0;
            ">
                <img src="logo.png.jpeg" alt="Logo" style="height: 45px; width: auto;">
                
                <h1 style="
                    font-family: 'Calibri', sans-serif !important; 
                    font-size: 26px !important; 
                    font-weight: bold; 
                    text-transform: uppercase; 
                    margin: 0; 
                    flex-grow: 1; 
                    text-align: center;
                    color: white;
                ">TABLERO MASTER MANTTO. SATEX TEXTIL</h1>
                
                <div style="
                    font-family: 'Segoe UI', Arial, sans-serif;
                    font-size: 14px; 
                    font-weight: bold;
                    min-width: 180px; 
                    text-align: right;
                    color: white;
                ">${fechaFormateada}</div>
            </div>`;
            
        contenedor.innerHTML = html;
    }
};
