const SatexHeaderDesign = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;

        // Lógica para obtener la fecha dinámica en el formato solicitado
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
        const hoy = new Date();
        const diaSemana = dias[hoy.getDay()];
        const diaMes = hoy.getDate();
        const mes = meses[hoy.getMonth()];
        const anio = hoy.getFullYear();
        
        const fechaFormateada = `${diaSemana} ${diaMes}-${mes}-${anio}`;

        container.innerHTML = `
        <div style="background-color: #1a2a3a; color: white; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; border-bottom: 3px solid #f9b218; height: 60px; font-family: 'Segoe UI', sans-serif;">
            
            <div style="width: 20%; display: flex; align-items: center;">
                <div style="background-color: white; padding: 5px; border-radius: 4px; display: flex; align-items: center; justify-content: center;">
                    <img src="logo.png.jpeg" alt="SATEX" style="height: 35px; width: auto;">
                </div>
            </div>

            <div style="width: 60%; text-align: center;">
                <div style="font-size: 22px; font-weight: 800; letter-spacing: 0.5px; color: #ffffff; text-transform: uppercase;">
                    TABLERO MASTER MANTTO. SATEX TEXTIL HILATURA
                </div>
            </div>

            <div style="width: 20%; text-align: right;">
                <div style="font-size: 16px; font-weight: bold; color: #f9b218;">
                    ${fechaFormateada}
                </div>
                <div style="font-size: 11px; color: #a1b1c1; text-transform: uppercase; letter-spacing: 1px;">
                    Monitoreo en Tiempo Real
                </div>
            </div>

        </div>`;
    }
};
