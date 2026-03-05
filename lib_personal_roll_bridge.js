/* lib_personal_roll_bridge.js */
/* VERSION 1.0
   - Gestiona el acceso al documento de Roll de Turnos
   - Función para abrir el libro en una nueva pestaña
*/

const SatexPersonalRollBridge = {

    sheetURL: "https://docs.google.com/spreadsheets/d/1Gxk5ugCRBZQEzM7OGxt9szyPAjFiXC_91WTbjygyZF8/edit?usp=sharing",

    abrirSheet: function() {
        window.open(this.sheetURL, "_blank");
    }
};
