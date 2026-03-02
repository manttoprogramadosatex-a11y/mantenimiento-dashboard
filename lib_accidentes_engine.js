const SatexAccidentesEngine = {
    // URL de publicación en formato CSV para extraer datos limpios
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRsieKeeM_L-_rUYAzkSHw1q34bUZLGyi6XgCSVGKNCNUNnD8Vm7yZbKhilK2_IolQRUpwcgDlV1tik/pub?gid=0&single=true&output=csv",

    actualizarTabla: async function(idContenedor) {
        try {
            const respuesta = await fetch(this.url);
            const contenido = await respuesta.text();
            
            // Convertir CSV a Array de datos
            const filasRaw = contenido.split('\n').map(fila => fila.split(','));
            
            // Filtrar desde la fila 3 (índice 2) y mapear columnas B a F
            const listaAccidentes = filasRaw.slice(2).map(col => ({
                item: col[1] || "",      // Columna B
                nombre: col[2] || "",    // Columna C
                puesto: col[3] || "",    // Columna D
                fecha: col[4] || "",     // Columna E
                dias: col[5] || ""       // Columna F
            })).filter(acc => acc.nombre.trim() !== ""); // Solo filas con nombre

            // Mandar a renderizar
            SatexAccidentesDesign.render(idContenedor, listaAccidentes);
        } catch (error) {
            console.error("Error cargando Accidentes:", error);
        }
    }
};
