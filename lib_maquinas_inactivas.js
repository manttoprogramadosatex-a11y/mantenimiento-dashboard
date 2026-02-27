const SatexMaquinasInactivas = {
    calcularDias: function(fechaParo) {
        const hoy = new Date();
        const inicio = new Date(fechaParo.split('/').reverse().join('-'));
        const diferencia = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 24));
        return diferencia >= 0 ? diferencia : 0;
    },

    render: function(id, datos) {
        const tabla = datos.map(m => {
            const dias = this.calcularDias(m.fecha);
            return `
            <div style="display: grid; grid-template-columns: 1fr 1fr 1.5fr 1fr; color: white; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 4px 0; align-items: center;">
                <span style="font-weight: 500;">${m.tipo}</span>
                <span style="color: #ff9999; font-weight: bold; text-align: center;">${m.num}</span>
                <span style="text-align: center; opacity: 0.9;">${m.fecha}</span>
                <span style="color: #f9b218; text-align: right; font-weight: bold;">${dias}d</span>
            </div>`;
        }).join('');

        document.getElementById(id).innerHTML = `
            <div style="color: #ff9999; font-size: 11px; font-weight: bold; margin-bottom: 4px; text-transform: uppercase; position: sticky; top: 0; background: rgba(30,30,30,0.6); z-index: 1;">
                TIPO | NÚM | DESDE | DÍAS
            </div>
            ${tabla}`;
    }
};
