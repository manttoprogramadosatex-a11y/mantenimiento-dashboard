const SatexHeaderDesign = {
    version: "2.0",

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

            <div style="width: 50%; text-align: center;">
                <div style="font-size: 22px; font-weight: 800; letter-spacing: 0.5px; color: #ffffff; text-transform: uppercase; line-height: 1;">
                    TABLERO MASTER MANTTO. SATEX TEXTIL HILATURA
                </div>
            </div>

            <div style="width: 30%; text-align: right; line-height: 1.1; display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
                
                <div style="font-size: 16px; font-weight: bold; color: #f9b218;">
                    ${fechaFormateada}
                </div>

                <button 
                    onclick="window.open('https://calendar.google.com/calendar/u/0?cid=bWFudHRvLnByb2dyYW1hZG8uc2F0ZXhAZ21haWwuY29t','_blank')" 
                    style="
                        background-color: #0d47a1;
                        color: white;
                        border: 2px solid #f9b218;
                        padding: 4px 10px;
                        font-size: 11px;
                        font-weight: bold;
                        cursor: pointer;
                        border-radius: 4px;
                        letter-spacing: 0.5px;
                    ">
                    PREVENTIVOS HOY
                </button>

                <div style="font-size: 10px; color: #a1b1c1; text-transform: uppercase; letter-spacing: 1px;">
                    Monitoreo en Tiempo Real
                </div>

            </div>

        </div>`;
    }
};
