const SatexPreventivoDesign = {
    render: function(id, porcentaje) {
        const container = document.getElementById(id);
        if (!container) return;

        // Estructura optimizada para 5 botones funcionales
        container.innerHTML = `
        <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 5px; box-sizing: border-box;">
            
            <div style="width: 35%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-top: 4px;">
                <div style="position: relative; width: 140px; height: 140px;">
                    <canvas id="canvas-preventivo" width="140" height="140"></canvas>
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-weight: bold; font-size: 22px; font-family: 'Segoe UI', sans-serif;">
                        ${porcentaje}%
                    </div>
                </div>
                <div style="color: #a1b1c1; font-size: 10px; font-weight: bold; margin-top: 4px; text-transform: uppercase; text-align: center; line-height: 1.1;">
                    Cumplimiento Acumulado
                </div>
            </div>

            <div style="width: 63%; height: 98%; display: flex; flex-direction: column; justify-content: space-between; padding: 5px 0 5px 10px; border-left: 1px solid rgba(255,255,255,0.1); box-sizing: border-box;">
                
                ${this.crearBotonHtml("Preventivos Hoy", "55", "#f9b218")}
                ${this.crearBotonHtml("Prev. pendientes antes hoy", "20", "#ff9999")}
                ${this.crearBotonHtml("Mantto. Diciembre", "12", "#4caf50")}
                ${this.crearBotonHtml("Mantto. Abril", "8", "#00bcd4")}
                ${this.crearBotonHtml("Mantto. D. Festivos", "5", "#e91e63")}

            </div>
        </div>`;

        this.dibujarCirculo(porcentaje);
    },

    // Función auxiliar para crear botones con efecto de clic real
    crearBotonHtml: function(texto, valor, color) {
        return `
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(0,0,0,0.2); padding: 3px 6px; border-radius: 4px; height: 18%;">
            <button onclick="console.log('Click en: ${texto}')" 
                style="width: 75%; height: 100%; background: #2f5577; color: white; border: 1px solid ${color}; border-radius: 4px; padding: 2px; font-size: 9px; font-weight: bold; text-transform: uppercase; cursor: pointer; transition: all 0.2s;"
                onmousedown="this.style.transform='scale(0.95)'; this.style.backgroundColor='#1a3a5a'"
                onmouseup="this.style.transform='scale(1)'; this.style.backgroundColor='#2f5577'"
                onmouseleave="this.style.transform='scale(1)'; this.style.backgroundColor='#2f5577'">
                ${texto}
            </button>
            <div style="width: 20%; color: ${color}; font-size: 18px; font-weight: bold; text-align: right; font-family: 'Segoe UI', sans-serif;">
                ${valor}
            </div>
        </div>`;
    },

    dibujarCirculo: function(porcentaje) {
        const canvas = document.getElementById('canvas-preventivo');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        const radio = 60; 

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x, y, radio, 0, 2 * Math.PI);
        ctx.lineWidth = 14; 
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.stroke();

        const finAngulo = (porcentaje / 100) * (2 * Math.PI) - Math.PI / 2;
        ctx.beginPath();
        ctx.arc(x, y, radio, -Math.PI / 2, finAngulo);
        ctx.lineWidth = 14;
        ctx.strokeStyle = '#4caf50';
        ctx.lineCap = 'round';
        ctx.stroke();
    }
};
