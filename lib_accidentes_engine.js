const SatexAccidentesEngine = {
    // Tu URL de publicación CSV
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRsieKeeM_L-_rUYAzkSHw1q34bUZLGyi6XgCSVGKNCNUNnD8Vm7yZbKhilK2_IolQRUpwcgDlV1tik/pub?gid=0&single=true&output=csv",

    actualizarDatos: async function(idContenedor) {
        try {
            const respuesta = await fetch(this.url);
            const texto = await respuesta.text();
            
            // Convertimos el CSV a una lista limpia
            const lineas = texto.split('\n');
            const listaProcesada = [];

            // Empezamos en la fila 3 (índice 2) según tus indicaciones (B3, C3, etc.)
            for (let i = 2; i < lineas.length; i++) {
                const columnas = lineas[i].split(',');
                if (columnas[2] && columnas[2].trim() !== "") { // Si hay un nombre en columna C
                    listaProcesada.push({
                        item: columnas[1] || "",      // Columna B
                        nombre: columnas[2] || "",    // Columna C
                        puesto: columnas[3] || "",    // Columna D
                        fecha: columnas[4] || "",     // Columna E
                        dias: columnas[5] || ""       // Columna F
                    });
                }
            }

            // Enviamos los datos al renderizador
            SatexAccidentesDesign.render(idContenedor, listaProcesada);
        } catch (error) {
            console.error("Error al jalar datos de Accidentes:", error);
            // Si falla, al menos dibuja la tabla vacía para no romper el diseño
            SatexAccidentesDesign.render(idContenedor, []);
        }
    }
};
