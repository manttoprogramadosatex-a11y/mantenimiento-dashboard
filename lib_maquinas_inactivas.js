// lib_maquinas_inactivas.js
// VERSION 1.2.0
// Cálculo de días automático compatible con Google Sheets
// No modifica diseño, solo lógica

const SatexMaquinasInactivas = {
    render: function(id, datos) {

        const container = document.getElementById(id);
        if (!container) return;

        if (!datos || datos.length === 0) {
            container.innerHTML = `
                <div style="color: #666; text-align: center; padding: 5px; font-size: 14px;">
                    Sin máquinas paradas
                </div>`;
            return;
        }

        const calcularDias = (fechaDesde) => {

            if (!fechaDesde) return 0;

            const inicio = new Date(fechaDesde);
            if (isNaN(inicio)) return 0;

            const hoy = new Date();

            inicio.setHours(0, 0, 0, 0);
            hoy.setHours(0, 0, 0, 0);

            const diferenciaMs = hoy - inicio;
            const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

            return dias < 0 ? 0 : dias;
        };

        container.innerHTML = datos.map(m => {

            const diasCalculados = calcularDias(m.desde);

            return `
            <div style="display: flex;
                        border-bottom: 1px solid rgba(255,68,68,0.2);
                        color: white;
                        font-size: 13px;
                        padding: 4px 0;
                        font-family: 'Segoe UI', sans-serif;
                        align-items: center;">
                
                <div style="width: 35%; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    ${m.tipo}
                </div>

                <div style="width: 15%; text-align: center; font-weight: bold; color: #ff4444;">
                    ${m.num}
                </div>

                <div style="width: 30%; text-align: center;">
                    ${m.desde}
                </div>

                <div style="width: 20%; text-align: center; font-weight: bold;">
                    ${diasCalculados}
                </div>

            </div>`;
        }).join('');
    }
};
