// ===============================
// LIB MANTENIMIENTO
// Versión 2.1
// Se agregan botones centrados:
// - Cambio Titulo
// - Lecciones aprendidas
// Sin modificar estructura existente
// ===============================

const SatexMantenimiento = (() => {

    function render() {

        const container = document.getElementById("mantenimiento-container");

        container.innerHTML = `
        
        <div class="mantenimiento-wrapper">

            <!-- ========================= -->
            <!-- MANTTO CORRECTIVO -->
            <!-- ========================= -->

            <div class="mantenimiento-correctivo">

                <h2 class="seccion-titulo">MANTTO. CORRECTIVO</h2>

                <div class="correctivo-superior">

                    <!-- BOTONES SUPERIORES EXISTENTES -->
                    <div class="correctivo-botones">
                        <button class="btn-mantto">CORRECTIVOS PROGRAMADOS</button>
                        <button class="btn-mantto">CORRECTIVOS A EDIFICIOS</button>
                        <button class="btn-mantto">BITÁCORA DE OS</button>
                    </div>

                    <!-- NUEVA FILA CENTRADA -->
                    <div class="correctivo-botones-secundarios">
                        <button class="btn-mantto-secundario">Cambio Titulo</button>
                        <button class="btn-mantto-secundario">Lecciones aprendidas</button>
                    </div>

                </div>

                <!-- RESTO DEL CONTENIDO ORIGINAL -->
                <div id="correctivo-contenido"></div>

            </div>

            <!-- ========================= -->
            <!-- MANTTO PREVENTIVO -->
            <!-- ========================= -->

            <div class="mantenimiento-preventivo">
                <div id="preventivo-contenido"></div>
            </div>

        </div>
        `;
    }

    return { render };

})();

document.addEventListener("DOMContentLoaded", () => {
    SatexMantenimiento.render();
});
