/**
 * Librería: lib_header_design.js
 * Estado: Restaurado a 26px
 */
const SatexHeaderDesign = {
    render: function(id) {
        const hoy = new Date();
        const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
        document.getElementById(id).innerHTML = `
        <div style="background:#274a66; display:flex; align-items:center; height:60px; padding:0 15px; border-bottom:2px solid #1e3a50;">
            <img src="logo.png.jpeg" style="height:45px;">
            <h1 style="font-family:'Calibri'; font-size:26px; font-weight:bold; color:white; flex-grow:1; text-align:center; margin:0; text-transform:uppercase;">
                TABLERO MASTER MANTTO. SATEX TEXTIL
            </h1>
            <div style="color:white; font-family:sans-serif; font-size:14px; min-width:180px; text-align:right;">
                ${hoy.toLocaleDateString('es-ES', opciones)}
            </div>
        </div>`;
    }
};
