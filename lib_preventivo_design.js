// lib_preventivo_design.js
// VERSION 1.7
// - Botón "Preventivos Hoy" abre Google Calendar
// - No altera layout ni dimensiones

const SatexPreventivoDesign = {
    render: function(id, porcentaje) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = `
        <div style="width: 100%; height: 100%; display: flex; align-items: stretch; justify-content: space-between; padding: 0 5px; box-sizing: border-box; font-family: 'Segoe UI', sans-serif;">
            
            <!-- COLUMNA IZQUIERDA -->
            <div style="
                width: 28%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
            ">

                <div style="display:flex; flex-direction:column; align-items:center;">

                    <div style="position: relative; width: 120px; height: 120px;">
                        <canvas id="canvas-preventivo" width="120" height="120"></canvas>
                        <div style="
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            color: white;
                            font-weight: bold;
                            font-size: 20px;
                        ">
                            ${porcentaje}%
                        </div>
                    </div>

                    <div style="
                        color: #a1b1c1;
                        font-size: 10px;
                        font-weight: bold;
                        margin-top: 6px;
                        text-transform: uppercase;
                        text-align: center;
                        line-height: 1;
                    ">
                        Cumplimiento Acumulado
                    </div>
                </div>

                <button style="
                    width: 90%;
                    height: 14%;
                    background: #2f5577;
                    color: white;
                    border: 1px solid #f9b218;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: bold;
                    cursor: pointer;
                    text-transform: uppercase;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                "
                onmousedown="this.style.transform='scale(0.97)'"
                onmouseup="this.style.transform='scale(1)'">
                    Procedimientos
                </button>
            </div>

            <!-- COLUMNA DERECHA -->
            <div style="
                width: 70%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-left: 10px;
                border-left: 1px solid rgba(255,255,255,0.1);
                box-sizing: border-box;
            ">
                ${this.btn("Preventivos Hoy", "55", "#f9b218", true)}
                ${this.btn("Prev. pendientes antes hoy", "20", "#ff9999")}
                ${this.btn("Preventivos Extraordinarios", "03", "#ffffff")} 
                ${this.btn("Mantto. Diciembre", "12", "#4caf50")}
                ${this.btn("Mantto. Abril", "8", "#00bcd4")}
                ${this.btn("Mantto. D. Festivos", "5", "#e91e63")}
            </div>
        </div>`;

        this.dibujarCirculo(porcentaje);
    },

    btn: function(t, v, c, abrirCalendario = false) {

        const accion = abrirCalendario
            ? `onclick="window.open('https://calendar.google.com/calendar/embed?src=mantto.programado.satex%40gmail.com','_blank')"`
            : "";

        return `
        <div style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(0,0,0,0.15);
            padding: 3px 6px;
            border-radius: 4px;
            height: 14%;
        ">
            
            <button style="
                width: 82%;
                height: 100%;
                background: #2f5577;
                color: white;
                border: 1px solid ${c};
                border-radius: 4px;
                font-size: 11px;
                font-weight: bold;
                text-transform: uppercase;
                cursor: pointer;
                padding: 0 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
            "
            ${accion}
            onmousedown="this.style.transform='scale(0.96)'"
            onmouseup="this.style.transform='scale(1)'">
                ${t}
            </button>

            <div style="
                width: 15%;
                color: ${c};
                font-size: 16px;
                font-weight: bold;
                text-align: right;
            ">
                ${v}
            </div>
        </div>`;
    },

    dibujarCirculo: function(p) {
        const canvas = document.getElementById('canvas-preventivo');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const x = 60, y = 60, radio = 50;

        ctx.clearRect(0, 0, 120, 120);

        ctx.beginPath();
        ctx.arc(x, y, radio, 0, 2 * Math.PI);
        ctx.lineWidth = 12;
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, radio, -Math.PI / 2, (p / 100) * (2 * Math.PI) - Math.PI / 2);
        ctx.strokeStyle = '#4caf50';
        ctx.lineCap = 'round';
        ctx.stroke();
    }
};
