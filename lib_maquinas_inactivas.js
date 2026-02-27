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
            <div style="display: grid; grid-template-columns: 1fr 1fr 1.5fr 1fr; color: white; font-size: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 2px 0; align-items: center;">
                <span>${m.tipo}</span>
                <span style="color: #ff9999; font-weight: bold; text-align: center;">${m.num}</span>
                <span style="text-align: center; opacity: 0.8;">${m.fecha}</span>
                <span style="color: #f9b218; text-align: right; font-weight: bold;">${dias}d</span>
            </div>`;
        }).join('');

        document.getElementById(id).innerHTML = `
            <div style="color: #ff9999; font-size: 8px; font-weight: bold; margin-bottom: 2px; text-transform: uppercase; position: sticky; top: 0; background: rgba(20,20,20,0.1);">Tipo | Núm | Desde | Días</div>
            ${tabla}`;
    }
};
