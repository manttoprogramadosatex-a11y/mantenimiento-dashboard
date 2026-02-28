const SatexAccidentes = {
    render: function(id, datos) {
        const container = document.getElementById(id);
        if (!container) return;

        // Se agregan los 3 ejemplos ficticios adicionales solicitados
        const datosExtendidos = [
            ...datos,
            { item: 3, nombre: "Martinez Luna Jorge", puesto: "Operador", fecha: "15-ene-2026", dias: 44 },
            { item: 4, nombre: "Reyes Castro Arturo", puesto: "Limpieza", fecha: "20-feb-2026", dias: 8 },
            { item: 5, nombre: "Sanchez Pineda Luis", puesto: "Mantenimiento", fecha: "27-feb-2026", dias: 1 }
        ];

        // Generar las filas de datos con scroll habilitado
        const tabla = datosExtendidos.map(a => `
            <div style="display: grid; grid-template-columns: 25px 2fr 1.5fr 1.5fr 1fr; color: white; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 5px 0; align-items: center;">
                <span style="color: #f9b218; font-weight: bold;">${a.item}</span>
                <span>${a.nombre}</span>
                <span style="color: #a1b1c1;">${a.puesto}</span>
                <span style="text-align: center;">${a.fecha}</span>
                <span style="color: #ff9999; text-align: right; font-weight: bold; padding-right: 5px;">${a.dias}d</span>
            </div>`).join('');

        // Estructura con encabezados fijos y área de datos con scroll vertical
        container.innerHTML = `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; overflow: hidden;">
            <div style="color: #ff9999; font-size: 11px; font-weight: bold; margin-bottom: 4px; display: grid; grid-template-columns: 25px 2fr 1.5fr 1.5fr 1fr; border-bottom: 1px solid rgba(255,153,153,0.4); padding-bottom: 2px; flex-shrink: 0; text-transform: uppercase;">
                <span>#</span>
                <span>Nombre</span>
                <span>Puesto</span>
                <span style="text-align: center;">Fecha</span>
                <span style="text-align: right; padding-right: 5px;">Días</span>
            </div>
            <div style="flex-grow: 1; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #ff9999 rgba(0,0,0,0.2);">
                <style>
                    #accidentes-scroll div::-webkit-scrollbar { width: 6px; }
                    #accidentes-scroll div::-webkit-scrollbar-thumb { background: #ff9999; border-radius: 10px; }
                </style>
                ${tabla}
            </div>
        </div>`;
    }
};
