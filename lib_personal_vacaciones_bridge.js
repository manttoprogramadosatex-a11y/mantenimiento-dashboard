/* lib_personal_vacaciones_bridge.js */
/* VERSION 1.0
   - Gestiona el acceso al documento de Vacaciones Programadas
   - Función para abrir el libro en una nueva pestaña
*/

const SatexPersonalVacacionesBridge = {

    sheetURL: "https://docs.google.com/spreadsheets/d/1GgYyObwn4Z-SlnXIdWGbXDTioQmgl0Ee-kGodUfuFiU/edit?usp=sharing",

    abrirSheet: function() {
        window.open(this.sheetURL, "_blank");
    }
};
