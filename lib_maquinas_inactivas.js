/* lib_maquinas_inactivas.js */
const SatexMaquinasInactivas = {
    calcularDias: function(fechaParo) {
        const hoy = new Date();
        const inicio = new Date(fechaParo.split('/').reverse().join('-'));
        const diferencia = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 24));
        return diferencia >= 0 ? diferencia : 0;
    },
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;

        const tabla = datos.map(m => {
            const dias = this.calcularDias(m.fecha);
            return `
            <div style="display: grid; grid-template-columns: 1fr 1fr 1.5fr 1.2fr; color: white; font-size: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 5px 0; align-items: center;">
                <span style="font-weight: bold;">${m.tipo}</span>
                <span style="color: #ff9999; font-weight: bold; text-align: center;">${m.num}</span>
                <span style="text-align: center; opacity: 0.9;">${m.fecha}</span>
                <span style="color: #f9b218; text-align: right; font-weight: bold; padding-right: 5px;">${dias}d</span>
            </div>`;
        }).join('');

        container.innerHTML = `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; overflow: hidden;">
            <div style="color: #ff9999; font-size: 11px; font-weight: bold; margin-bottom: 4px; display: grid; grid-template-columns: 1fr 1fr 1.5fr 1.2fr; border-bottom: 1px solid #ff9999; padding-bottom: 2px;">
                <span>TIPO</span> <span style="text-align: center;">NÚM</span> <span style="text-align: center;">DESDE</span> <span style="text-align: right; padding-right: 5px;">DÍAS</span>
            </div>
            <div style="flex-grow: 1; overflow-y: auto;">${tabla}</div>
        </div>`;
    }
};
