const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        container.innerHTML = `
        <div style="display: flex; width: 100%; height: 100%; position: relative; font-family: 'Segoe UI', sans-serif;">
            <div style="position: absolute; left: 50%; top: 0px; bottom: 20px; width: 2px; background-color: #f9b218; transform: translateX(-50%); z-index: 5;"></div>
            
            <div style="flex: 1; display: flex; flex-direction: column; padding: 2px 10px; position: relative;">
                <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 100%; text-align: center; text-transform: uppercase; margin-bottom: 5px;">Mantto. Correctivo</div>
                
                <div style="display: flex; width: 100%; height: 180px; gap: 5px;">
                    <div style="display: flex; width: 55%; justify-content: flex-start; gap: 2px;">
                        <div id="pmc-diario-container" style="width: 48%;"></div>
                        <div id="pmc-mensual-container" style="width: 48%;"></div>
                    </div>

                    <div style="width: 45%; display: flex; flex-direction: column; gap: 5px; justify-content: center;">
                        <div id="kpis-correctivo-container" style="width: 100%;"></div>
                        <div style="display: flex; flex-direction: column; gap: 3px;">
                            ${this.btn("Correctivos Programados", "#f9b218")}
                            ${this.btn("Correctivos a Edificios", "#00bcd4")}
                            ${this.btn("Bitácora de OS", "#ffffff")}
                        </div>
                    </div>
                </div>

                <div style="position: absolute; bottom: 85px; width: 100%; display: flex; justify-content: space-between; left: 0; padding: 0 10px; box-sizing: border-box;">
                    <div style="color: #f9b218; font-size: 11px; font-weight: bold; border-bottom: 1px solid #f9b218; width: 48%; text-align: center;">Dets. Personal Mantto.</div>
                    <div style="color: #f9b218; font-size: 11px; font-weight: bold; border-bottom: 1px solid #f9b218; width: 48%; text-align: center;">Pendientes Compras</div>
                </div>

                <div style="position: absolute; bottom: 10px; left: 0; width: 100%; height: 65px; display: flex; justify-content: space-between; padding: 0 10px; box-sizing: border-box;">
                    <div id="personal-mantto-scroll" style="width: 48%; background: rgba(0,0,0,0.2); border-radius: 4px; overflow: hidden;"></div>
                    <div id="compras-pendientes-scroll" style="width: 48%; background: rgba(0,0,0,0.2); border-radius: 4px; overflow: hidden;"></div>
                </div>
            </div>

            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; position: relative; padding-top: 2px;">
                <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 85%; text-align: center; text-transform: uppercase;">Mantto. Preventivo</div>
                <div id="preventivos-grafico-container" style="width: 100%; height: calc(100% - 150px); margin-top: 5px;"></div>
                <div style="position: absolute; bottom: 85px; left: 50%; transform: translateX(-50%); color: #ff9999; font-size: 14px; font-weight: bold; border-bottom: 1px solid #ff9999; width: 70%; text-align: center;">Accidentes</div>
                <div id="accidentes-scroll" style="position: absolute; bottom: 10px; left: 5%; width: 90%; height: 65px; background: rgba(0,0,0,0.2); border-radius: 4px; overflow: hidden;"></div>
            </div>
        </div>`;
    },
    btn: function(t, c) {
        return `<button style="width: 100%; height: 22px; background: #2f5577; color: white; border: 1px solid ${c}; border-radius: 3px; font-size: 10px; font-weight: bold; text-transform: uppercase; cursor: pointer;">${t}</button>`;
    }
};
