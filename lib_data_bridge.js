/**
 * SatexDataBridge - Librería de Enlace y Protección
 */
const SatexDataBridge = {
    async updatePreventivo() {
        try {
            // Obtener el dato de la pestaña Estadisticas celda D4
            const stats = await SatexDataLoader.getPreventivoStats();
            
            if (stats && stats.cumplimiento !== undefined) {
                let valorLimpio = stats.cumplimiento;
                
                // Si viene como "23.08%" o 0.2308, lo convertimos a número entero
                if (typeof valorLimpio === 'string') {
                    valorLimpio = parseFloat(valorLimpio.replace('%', ''));
                } else if (valorLimpio < 1) {
                    valorLimpio = Math.round(valorLimpio * 100);
                }

                const numFinal = Math.round(valorLimpio) || 0;

                // Llamamos al render original sin quitar los valores ficticios 55 y 20
                if (typeof SatexPreventivoDesign !== 'undefined') {
                    SatexPreventivoDesign.render("preventivos-grafico-container", numFinal, 55, 20);
                }
            }
        } catch (error) {
            console.warn("Error en Bridge: El tablero sigue funcionando con datos base.", error);
        }
    }
};
