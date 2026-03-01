/* lib_header.js */
/* VERSION 1.1.2
   - Logo desplazado visualmente 1cm a la derecha
   - Título permanece centrado real
   - Fecha no se mueve
   - Altura 60px intacta
*/

const SatexHeader = {
    render: function(id) {
        const hoy = new Date();
        const opciones = { day: 'numeric', month: 'long', year: 'numeric' };

        document.getElementById(id).innerHTML = `
            <div style="background:#274a66; display:flex; align-items:center; height:60px; padding:0 15px; border-bottom:2px solid #1e3a50;">
                
                <!-- Contenedor fijo del logo -->
                <div style="width:200px; display:flex; justify-content:flex-start;">
                    <img src="logo.png.jpeg" style="height:45px; margin-left:35px;">
                </div>

                <h1 style="
                    font-family:'Calibri';
                    font-size:26px;
                    font-weight:bold;
                    color:white;
                    flex:1;
                    text-align:center;
                    margin:0;
                    text-transform:uppercase;
                ">
                    TABLERO MASTER MANTTO. SATEX TEXTIL
                </h1>

                <div style="
                    min-width:200px;
                    color:white;
                    text-align:right;
                    line-height:1.1;
                ">
                    <div style="font-size:14px; font-weight:bold;">
                        ${hoy.toLocaleDateString('es-ES', opciones)}
                    </div>
                    <div style="
                        font-size:11px;
                        color:#a1b1c1;
                        font-weight:bold;
                        letter-spacing:0.5px;
                    ">
                        MONITOREO CORRECTIVOS EN TIEMPO REAL
                    </div>
                </div>

            </div>`;
    }
};
