/* lib_satex_auth_design.js */
/* VERSION 1.0
   Diseño login SATEX
*/

const SATEX_LOGO =
"https://drive.google.com/uc?export=view&id=1y1cBgnkjAZSr29jtw25PioRi2zABcEu4";

const SISTEMA_LOGO =
"https://drive.google.com/uc?export=view&id=1VJa8fT6KCh5LyWyhAuv4SuM-LCUQTqnP";

function satexCreateLogin(){

    const overlay = document.createElement("div");
    overlay.id="satex_login_overlay";

    overlay.innerHTML=`

    <div id="satex_login_panel">

        <img src="${SATEX_LOGO}" id="satex_logo">

        <h2>SATEX TEXTIL HILATURA</h2>

        <p>
        Bienvenido al Tablero Maestro de Mantenimiento
        </p>

        <p>
        Por favor introduce tu usuario y contraseña
        para acceder al sistema.
        </p>

        <input id="satex_user" placeholder="Usuario">

        <input id="satex_pass" type="password" placeholder="Contraseña">

        <button id="satex_login_btn">ENTRAR</button>

        <div id="satex_error"></div>

    </div>
    `;

    document.body.appendChild(overlay);

}

function satexShowLoading(){

    const overlay=document.getElementById("satex_login_overlay");

    overlay.innerHTML=`

        <div id="satex_loading">

            <img src="${SISTEMA_LOGO}" id="satex_logo2">

            <h3>Inicializando tablero maestro...</h3>

            <p>Cargando datos operativos del sistema...</p>

        </div>

    `;

}

const style=document.createElement("style");

style.innerHTML=`

#satex_login_overlay{

position:fixed;
top:0;
left:0;
width:100%;
height:100%;

background:radial-gradient(circle,#0b1f3a,#081528);

display:flex;
align-items:center;
justify-content:center;

z-index:999999;
font-family:Arial;

}

#satex_login_panel{

background:rgba(255,255,255,0.05);
padding:40px;
border-radius:12px;

text-align:center;
color:white;

width:340px;

box-shadow:0 0 30px rgba(0,0,0,0.6);

}

#satex_logo{

width:180px;
margin-bottom:20px;

}

#satex_user,
#satex_pass{

width:100%;
padding:10px;
margin-top:10px;

border:none;
border-radius:6px;

}

#satex_login_btn{

margin-top:15px;

width:100%;
padding:10px;

background:#1e90ff;
color:white;

border:none;
border-radius:6px;

cursor:pointer;

}

#satex_login_btn:hover{

background:#3aa0ff;

}

#satex_error{

color:#ff6b6b;
margin-top:10px;

}

#satex_loading{

text-align:center;
color:white;

}

#satex_logo2{

width:220px;
margin-bottom:25px;

}

`;

document.head.appendChild(style);
