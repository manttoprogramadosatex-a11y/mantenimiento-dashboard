/* lib_header.js */
/* VERSION 1.1
   - Se agrega palabra "CORRECTIVOS"
   - Se aumenta ligeramente tamaño del subtítulo
   - No se modifica altura del header
   - No se altera layout
*/

const SatexHeader = {

    render: function(id) {

        const container = document.getElementById(id);
        if (!container) return;

        const fecha = this.obtenerFechaActual();

        container.innerHTML = `
        <div style="
            background-color: #1f2f43;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px;
            border-bottom: 2px solid #f9b218;
            font-family: Calibri, sans-serif;
        ">

            <!-- LOGO -->
            <div style="display: flex; align-items: center;">
                <img src="logo.png.jpeg" style="height: 38px;">
            </div>

            <!-- TÍTULO CENTRAL -->
            <div style="text-align: center; flex-grow: 1;">
                <div style="
                    color: white;
                    font-size: 22px;
                    font-weight: bold;
                    letter-spacing: 1px;
                ">
                    TABLERO MASTER MANTTO. SATEX TEXTIL HILATURA
                </div>
            </div>

            <!-- FECHA Y SUBTÍTULO -->
            <div style="text-align: right; line-height: 1.2;">
                <div style="
                    color: #f9b218;
                    font-size: 16px;
                    font-weight: bold;
                ">
                    ${fecha}
                </div>
                <div style="
                    color: #a1b1c1;
                    font-size: 13px; /* 🔥 antes 11px aprox */
                    font-weight: bold;
                    letter-spacing: 0.5px;
                ">
                    MONITOREO CORRECTIVOS EN TIEMPO REAL
                </div>
            </div>

        </div>`;
    },

    obtenerFechaActual: function() {
        const dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
        const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        const hoy = new Date();
        return `${dias[hoy.getDay()]} ${hoy.getDate()}-${meses[hoy.getMonth()]}-${hoy.getFullYear()}`;
    }
};
