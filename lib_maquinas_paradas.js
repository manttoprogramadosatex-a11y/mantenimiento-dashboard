/**
 * Librería: lib_maquinas_paradas.js
 * Descripción: Genera el recuadro de Máquinas Paradas.
 * Ajuste: Centrado del número y eliminación total de la palabra "Husos".
 */

const SatexMaquinasParadas = {
    crearEstructura: function(cantidad) {
        return `
        <div id="card-maquinas-paradas" style="background-color: rgba(255, 255, 255, 0.1); border-left: 4px solid #da291c; padding: 5px 12px; min-width: 160px; height: 50px; display: flex; flex-direction: column; justify-content: flex-start; box-sizing: border-box; font-family: 'Segoe UI', Arial, sans-serif;">
            <div style="color: #adb5bd; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 2px;">
                MÁQUINAS PARADAS
            </div>
            
            <div style="display: flex; justify-content: center; align-items: center; width: 100%; flex-grow: 1;">
                <span style="color: #da291c; font-size: 28px; font-weight: 900; line-height: 1;">
                    ${cantidad}
                </span>
            </div>
        </div>`;
    }
};
