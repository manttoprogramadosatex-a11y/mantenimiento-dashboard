/**
 * Librería: lib_estatus_design.js
 * Descripción: Ensambla la fila de indicadores de estatus.
 */

const SatexEstatusDesign = {
    dibujarFila: function(contenedorId, datos) {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor) return;

        // Limpiamos el contenedor antes de dibujar
        contenedor.innerHTML = "";
        
        // Contenedor Flex para que todos los indicadores vayan en fila
        const filaFlex = document.createElement('div');
        filaFlex.style.display = "flex";
        filaFlex.style.gap = "10px";
        filaFlex.style.alignItems = "center";
        filaFlex.style.width = "100%";

        // 1. LLAMADA A MÁQUINAS PARADAS (Sin la palabra Husos)
        let htmlParadas = "";
        if (typeof SatexMaquinasParadas !== 'undefined') {
            htmlParadas = SatexMaquinasParadas.crearEstructura(datos.paradas || 0);
        }

        // 2. OTROS INDICADORES (Aquí podrías tener los que SÍ llevan Husos)
        // Ejemplo de cómo se verían los otros si existieran:
        let htmlOtros = "";
        if (datos.otros) {
            htmlOtros = `
            <div style="background-color: rgba(255, 255, 255, 0.1); border-left: 4px solid #28a745; padding: 5px 12px; min-width: 150px; height: 50px;">
                <div style="color: #adb5bd; font-size: 10px; font-weight: bold;">OTROS EQUIPOS</div>
                <div style="color: #28a745; font-size: 24px; font-weight: 900;">${datos.otros} <span style="font-size: 12px;">Husos</span></div>
            </div>`;
        }

        // Unimos todo en la fila
        filaFlex.innerHTML = htmlParadas + htmlOtros;
        contenedor.appendChild(filaFlex);
    }
};
