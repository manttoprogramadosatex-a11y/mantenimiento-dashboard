const SatexHeaderDesign = {
    version: "9.1",

    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;

        const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
        const hoy = new Date();
        const diaSemana = dias[hoy.getDay()];
        const diaMes = hoy.getDate();
        const mes = meses[hoy.getMonth()];
        const anio = hoy.getFullYear();
        
        const fechaFormateada = `${diaSemana} ${diaMes}-${mes}-${anio}`;

        container.innerHTML = `
        <div style="background-color: #1a2a3a; color: white; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; border-bottom: 3px solid #f9b218; height: 50px; font-family: 'Segoe UI', sans-serif;">
            
            <div style="width: 20%; display: flex; align-items: center;">
                <div style="background-color: white; padding: 3px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                    <img src="logo.png.jpeg" alt="SATEX" style="height: 32px; width: auto;">
                </div>
            </div>

            <div style="width: 40%; text-align: center;">
                <div style="font-size: 20px; font-weight: 800; letter-spacing: 0.5px; color: #ffffff; text-transform: uppercase; line-height: 1;">
                    TABLERO MASTER MANTTO. SATEX TEXTIL HILATURA
                </div>
            </div>

            <div style="width: 40%; text-align: right; display: flex; align-items: center; justify-content: flex-end; gap: 10px;">
                <div style="color: #f9b218; font-size: 16px; font-weight: bold; letter-spacing: 0.5px;">
                    ${fechaFormateada}
                </div>
            </div>

        </div>`;
    }
};
