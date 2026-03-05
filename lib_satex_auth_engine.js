/* lib_satex_auth_engine.js */
/* VERSION 1.2 - Soporte para persistencia de sesión */

async function satexInitAuth(){
    // 1. Si ya hay sesión en localStorage, no mostramos el login
    if(localStorage.getItem("satex_session") === "active") {
        return; 
    }

    if(typeof satexCreateLogin === "function"){
        satexCreateLogin();
    }

    const btn = document.getElementById("satex_login_btn");
    if(!btn) return;

    btn.addEventListener("click", async () => {
        const user = document.getElementById("satex_user").value.trim();
        const pass = document.getElementById("satex_pass").value.trim();

        const users = await satexFetchUsers();
        const valid = users.find(u => u.usuario === user && u.password === pass);

        if(!valid){
            document.getElementById("satex_error").innerText = "Usuario o contraseña incorrectos";
            return;
        }

        satexShowLoading();

        setTimeout(() => {
            const overlay = document.getElementById("satex_login_overlay");
            if(overlay) overlay.remove();

            // Guardar sesión e iniciar app
            localStorage.setItem("satex_session", "active");
            window.satexStartApp();
        }, 1500);
    });
}

window.addEventListener("load", satexInitAuth);

// Función extra por si quieres añadir un botón de "Cerrar Sesión" después
function satexLogout() {
    localStorage.removeItem("satex_session");
    location.reload();
}
