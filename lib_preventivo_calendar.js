/* lib_preventivo_calendar.js */
/* VERSION 1.0
   - Abre Google Calendar al hacer click en PREVENTIVOS HOY
   - Librería independiente
   - No afecta layout ni engine
*/

const SatexPreventivoCalendar = {

    init() {
        document.addEventListener("click", function(e) {

            const boton = e.target.closest(".preventivo-hoy-btn");

            if (!boton) return;

            SatexPreventivoCalendar.abrirCalendar();
        });
    },

    abrirCalendar() {

        const baseUrl = "https://calendar.google.com/calendar/u/0?cid=bWFudHRvLnByb2dyYW1hZG8uc2F0ZXhAZ21haWwuY29t";

        const hoy = new Date();
        const yyyy = hoy.getFullYear();
        const mm = String(hoy.getMonth() + 1).padStart(2, "0");
        const dd = String(hoy.getDate()).padStart(2, "0");

        // Intentar forzar vista día actual
        const fechaHoy = `${yyyy}${mm}${dd}`;

        const urlFinal = `${baseUrl}&pli=1&date=${fechaHoy}`;

        window.open(urlFinal, "_blank");
    }

};

document.addEventListener("DOMContentLoaded", function() {
    SatexPreventivoCalendar.init();
});
