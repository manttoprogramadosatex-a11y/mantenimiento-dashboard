/* lib_satex_auth_engine.js */
/* VERSION 1.0
   Motor autenticación SATEX
*/

async function satexInitAuth(){

    satexCreateLogin();

    const btn=document.getElementById("satex_login_btn");

    btn.addEventListener("click",async()=>{

        const user=document.getElementById("satex_user").value.trim();
        const pass=document.getElementById("satex_pass").value.trim();

        const users=await satexFetchUsers();

        const valid=users.find(u=>u.usuario===user && u.password===pass);

        if(!valid){

            document.getElementById("satex_error").innerText="Usuario o contraseña incorrectos";

            return;
        }

        satexShowLoading();

        setTimeout(()=>{

            document.getElementById("satex_login_overlay").remove();

        },2000);

    });

}

window.addEventListener("load",satexInitAuth);
