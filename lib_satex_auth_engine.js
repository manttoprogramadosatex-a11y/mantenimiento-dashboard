/* lib_satex_auth_engine.js */
/* VERSION 1.1 - Corregida para activar tablero */

async function satexInitAuth(){
    // Verificar si la función de creación existe
    if(typeof satexCreateLogin === "function"){
        satexCreateLogin();
    } else {
        console.error("No se encontró satexCreateLogin en lib_satex_auth_design.js");
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
            // 1. Quitar la pantalla de login
            const overlay = document.getElementById("satex_login_overlay");
            if(overlay) overlay.remove();

            // 2. 🔥 ¡ACTIVAR EL TABLERO!
            if(typeof window.satexStartApp === "function"){
                window.satexStartApp();
            } else {
                console.error("La función satexStartApp no está definida en el HTML");
            }
        }, 1500);
    });
}

// Iniciar proceso de auth
window.addEventListener("load", satexInitAuth);
