/* lib_satex_users_bridge.js */
/* VERSION 1.0
   Lee usuarios desde Google Sheets
   Hoja: Usuarios
   Rango: A2:B10
*/

const SATEX_USERS_URL =
"https://docs.google.com/spreadsheets/d/1T2QCfmk18KEEHidPxJJUF-226Jf1s9K_rpMCaXletQQ/gviz/tq?tqx=out:json&sheet=Usuarios";

async function satexFetchUsers(){

    const res = await fetch(SATEX_USERS_URL);
    const text = await res.text();

    const json = JSON.parse(text.substring(47).slice(0,-2));

    const rows = json.table.rows;

    const users = [];

    rows.forEach(r=>{
        if(!r.c) return;

        const user = r.c[0]?.v;
        const pass = r.c[1]?.v;

        if(user && pass){
            users.push({
                usuario:user.toString().trim(),
                password:pass.toString().trim()
            });
        }
    });

    return users;
}
