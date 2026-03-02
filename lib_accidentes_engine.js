/* lib_accidentes_engine.js */
/* VERSION 1.0
   - Centraliza datos de Accidentes
   - Elimina datos hardcodeados del index
   - Mantiene mismo comportamiento visual
*/

const SatexAccidentesEngine = {

    inicializar: function() {

        const datosAccidentes = [
            {item: "1", nombre: "Gonzalez Solis Mario", puesto: "Ayudante Mec.", fecha: "10-oct-2025", dias: "141"},
            {item: "2", nombre: "Ambriz Mendoza Rosa", puesto: "Tornero", fecha: "2-feb-2025", dias: "391"},
            {item: "3", nombre: "Ejemplo Ficticio A", puesto: "Puesto Prueba", fecha: "01-ene-2026", dias: "58"},
            {item: "4", nombre: "Ejemplo Ficticio B", puesto: "Puesto Prueba", fecha: "15-feb-2026", dias: "13"}
        ];

        SatexAccidentes.render("accidentes-scroll", datosAccidentes);
    }

};
