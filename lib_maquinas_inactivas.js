const SatexMaquinasInactivas = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;

        if (!datos || datos.length === 0) {
            container.innerHTML = `<div style="color: #666; text-align: center; padding: 5px; font-size: 14px;">Sin máquinas paradas</div>`;
            return;
        }

        const calcularDias = (fechaDesde) => {
            const inicio = new Date(fechaDesde);
            const hoy = new Date();
            // Ponemos ambos en horas 0 para contar días naturales exactos
            inicio.setHours(0, 0, 0, 0);
            hoy.setHours(0, 0, 0, 0);
            
            const diferenciaMs = hoy - inicio;
            const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
            return dias < 0 ? 0 : dias;
        };

        container.innerHTML = datos.map(m => {
            // Si el dato 'desde' parece una fecha (tiene /), calculamos los días
            const diasCalculados = m.desde.includes('/') ? calcularDias(m.desde) : m.dias;
            
            return `
            <div style="display: flex; border-bottom: 1px solid rgba(255,68,68,0.2); color: white; font-size: 13px; padding: 4px 0; font-family: 'Segoe UI', sans-serif; align-items: center;">
                <div style="width: 25%; text-align: center;">${m.tipo}</div>
                <div style="width: 20%; text-align: center; font-weight: bold; color: #ff4444;">${m.num}</div>
                <div style="width: 35%; text-align: center;">${m.desde}</div>
                <div style="width: 20%; text-align: center; font-weight: bold;">${diasCalculados}</div>
            </div>`;
        }).join('');
    }
};
