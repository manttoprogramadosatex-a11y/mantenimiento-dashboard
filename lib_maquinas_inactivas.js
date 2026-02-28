const SatexMaquinasInactivas = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;

        if (!datos || datos.length === 0) {
            container.innerHTML = `<div style="color: #666; text-align: center; padding: 5px; font-size: 14px;">Sin máquinas paradas</div>`;
            return;
        }

        // Función interna para calcular días transcurridos
        const calcularDiasDesdeFecha = (fechaStr) => {
            // Intentar parsear la fecha (Formatos esperados: YYYY/MM/DD o MM/DD/YYYY)
            const fechaInicio = new Date(fechaStr);
            const fechaHoy = new Date();
            
            // Normalizar a media noche para conteo de días exactos
            fechaInicio.setHours(0, 0, 0, 0);
            fechaHoy.setHours(0, 0, 0, 0);
            
            const diferenciaMilisegundos = fechaHoy - fechaInicio;
            const dias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
            
            return dias < 0 ? 0 : dias;
        };

        container.innerHTML = datos.map(m => {
            // Si el campo 'desde' contiene una fecha (diagonal), calculamos. 
            // Si no, usamos el valor manual que traiga el objeto.
            const diasFinales = m.desde.includes('/') ? calcularDiasDesdeFecha(m.desde) : (m.dias || 0);

            return `
            <div style="display: flex; border-bottom: 1px solid rgba(255,68,68,0.2); color: white; font-size: 13px; padding: 4px 0; font-family: 'Segoe UI', sans-serif; align-items: center;">
                <div style="width: 25%; text-align: center;">${m.tipo}</div>
                <div style="width: 20%; text-align: center; font-weight: bold; color: #ff4444;">${m.num}</div>
                <div style="width: 35%; text-align: center;">${m.desde}</div>
                <div style="width: 20%; text-align: center; font-weight: bold;">${diasFinales}</div>
            </div>`;
        }).join('');
    }
};
