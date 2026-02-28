const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        container.innerHTML = `
        <div style="display: flex; width: 100%; height: 100%; position: relative; font-family: 'Segoe UI', sans-serif;">
            <div style="position: absolute; left: 50%; top: 0px; bottom: 20px; width: 2px; background-color: #f9b218; transform: translateX(-50%); z-index: 5;"></div>
            
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; padding: 2px 10px; position: relative; gap: 5px;">
                <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 100%; text-align: center; text-transform: uppercase;">Mantto. Correctivo</div>
                
                <div style="display: flex; width: 100%; justify-content: space-around; height: 140px;">
                    <div id="pmc-diario-container"></div>
                    <div id="pmc-mensual-container"></div>
                </div>

                <div id="kpis-correctivo-container" style="width: 100%;"></div>

                <div style="width: 100%; display: flex; flex-direction: column; gap: 3px;">
                    ${this.btnExtra("Correctivos Programados", "#f9b218")}
                    ${this.btnExtra("Correctivos a Edificios", "#00bcd4")}
                    ${this.btnExtra("Bitácora de OS", "#ffffff")}
                </div>

                <div style="position: absolute; bottom: 85px; width: 100%; display: flex; justify-content: space-between;">
                    <div style="color: #f9b218; font-size: 13px; font-weight: bold; border-bottom: 1px solid #f9b218; padding-bottom: 2px; width: 48%; text-align: center; text-transform: uppercase;">Dets. Personal Mantto.</div>
                    <div style="color: #f9b218; font-size: 13px; font-weight: bold; border-bottom: 1px solid #f9b218; padding-bottom: 2px; width: 48%; text-align: center; text-transform: uppercase;">Pendientes Compras</div>
                </div>

                <div id="personal-mantto-scroll" style="position: absolute; bottom: 10px; left: 0; width: 48%; height: 65px; background: rgba(0,0,0,0.2); border-radius: 4px; overflow: hidden;"></div>
                <div id="compras-pendientes-scroll" style="position: absolute; bottom: 10px; right: 0; width: 48%; height: 65px; background: rgba(0,0,0,0.2); border-radius: 4px; overflow: hidden;"></div>
            </div>

            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; position: relative; padding-top: 2px;">
                <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 85%; text-align: center; text-transform: uppercase;">Mantto. Preventivo</div>
                <div id="preventivos-grafico-container" style="width: 100%; height: calc(100% - 150px); margin-top: 5px; overflow: hidden;"></div>
                <div id="titulo-accidentes" style="position: absolute; bottom: 85px; left: 50%; transform: translateX(-50%); color: #ff9999; font-size: 14px; font-weight: bold; border-bottom: 1px solid #ff9999; padding-bottom: 2px; width: 70%; text-align: center; text-transform: uppercase;">Accidentes</div>
                <div id="accidentes-scroll" style="position: absolute; bottom: 10px; left: 5%; width: 90%; height: 65px; background: rgba(0,0,0,0.2); border-radius: 4px; padding: 5px; box-sizing: border-box; overflow: hidden;"></div>
            </div>
        </div>`;
    },

    btnExtra: function(t, c) {
        return `<button style="width: 100%; height: 22px; background: #2f5577; color: white; border: 1px solid ${c}; border-radius: 3px; font-size: 10px; font-weight: bold; text-transform: uppercase; cursor: pointer;">${t}</button>`;
    }
};
