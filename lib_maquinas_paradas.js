/**
 * Librería: lib_maquinas_paradas.js
 * Descripción: Maneja el indicador de Máquinas Paradas.
 * Ajuste: Centrado horizontal del número y eliminación de la palabra "Husos".
 */

const SatexMaquinasParadas = {
    /**
     * Crea la estructura HTML para el indicador de máquinas paradas.
     * @param {number} cantidad - El valor numérico a mostrar (ej. 3).
     */
    crearEstructura: function(cantidad) {
        return `
        <div style="background-color: rgba(255, 255, 255, 0.1); border-left: 4px solid #da291c; padding: 5px 12px; min-width: 150px; height: 50px; display: flex; flex-direction: column; justify-content: flex-start; box-sizing: border-box;">
            <div style="color: #adb5bd; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 2px; align-self: flex-start;">
                MÁQUINAS PARADAS
            </div>
            
            <div style="display: flex; justify-content: center; align-items: center; width: 100%; flex-grow: 1;">
                <span style="color: #da291c; font-size: 28px; font-weight: 900; line-height: 1; font-family: 'Segoe UI', Arial, sans-serif;">
                    ${cantidad}
                </span>
            </div>
        </div>`;
    },

    /**
     * Actualiza el valor mostrado en el contenedor especificado.
     */
    actualizar: function(contenedorId, cantidad) {
        const contenedor = document.getElementById(contenedorId);
        if (contenedor) {
            contenedor.innerHTML = this.crearEstructura(cantidad);
        }
    }
};
