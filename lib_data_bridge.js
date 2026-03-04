/**
 * SatexDataBridge - Librería de Enlace
 * Actúa como puente entre los datos de Google Sheets y el diseño del tablero.
 */
const SatexDataBridge = {
    async updatePreventivo() {
        try {
            // 1. Obtener datos de la pestaña Estadísticas
            const stats = await SatexDataLoader.getPreventivoStats();
            
            if (stats) {
                // 2. Procesar el % de Cumplimiento (D4)
                // Si viene como "23.08%", extraemos solo el número 23
                let cumplimientoNum = 0;
                if (typeof stats.cumplimiento === 'string') {
                    cumplimientoNum = parseInt(stats.cumplimiento.replace('%', ''));
                } else {
                    cumplimientoNum = Math.round(stats.cumplimiento * 100);
                }

                // 3. Mandar a renderizar a la librería de diseño original
                // Pasamos el ID del contenedor, el valor procesado, y los datos ficticios actuales
                // para que no se pierdan hasta que decidamos conectarlos también.
                if (typeof SatexPreventivoDesign !== 'undefined') {
                    SatexPreventivoDesign.render(
                        "preventivos-grafico-container", 
                        cumplimientoNum, // Este es el valor de D4 convertido a número
                        55, // Preventivos Hoy (Ficticio por ahora)
                        20  // Pendientes (Ficticio por ahora)
                    );
                }
            }
        } catch (error) {
            console.error("Error en el puente de datos preventivos:", error);
        }
    }
};
