/* lib_header.js */
/* VERSION 1.1
   - Se agrega subtítulo: MONITOREO CORRECTIVOS EN TIEMPO REAL
   - No se modifica altura (60px)
   - No se altera layout general
*/

const SatexHeader = {
    render: function(id) {
        const hoy = new Date();
        const opciones = { day: 'numeric', month: 'long', year: 'numeric' };

        document.getElementById(id).innerHTML = `
            <div style="background:#274a66; display:flex; align-items:center; height:60px; padding:0 15px; border-bottom:2px solid #1e3a50;">
                
                <img src="logo.png.jpeg" style="height:45px;">

                <h1 style="
                    font-family:'Calibri';
                    font-size:26px;
                    font-weight:bold;
                    color:white;
                    flex-grow:1;
                    text-align:center;
                    margin:0;
                    text-transform:uppercase;
                ">
                    TABLERO MASTER MANTTO. SATEX TEXTIL
                </h1>

                <div style="
                    color:white;
                    min-width:200px;
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
