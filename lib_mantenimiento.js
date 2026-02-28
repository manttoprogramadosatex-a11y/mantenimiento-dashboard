const SatexMantenimiento = {
    render: function(id) {
        const container = document.getElementById(id);
        if (!container) return;
        container.innerHTML = `
        <div style="display: flex; width: 100%; height: 100%; position: relative; font-family: 'Segoe UI', sans-serif; background-color: #2f5577;">
            <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background-color: #f9b218; transform: translateX(-50%); z-index: 10;"></div>
            
            <div style="flex: 1; display: flex; flex-direction: column; padding: 5px 15px; border-right: 1px solid rgba(255,255,255,0.1);">
                <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 100%; text-align: center; text-transform: uppercase; margin-bottom: 10px;">Mantto. Correctivo</div>
                
                <div style="display: flex; width: 100%; height: 150px; margin-bottom: 10px;">
                    <div style="width: 55%; display: flex; justify-content: space-around;">
                        <div id="pmc-diario-container" style="width: 48%;"></div>
                        <div id="pmc-mensual-container" style="width: 48%;"></div>
                    </div>
                    <div id="kpis-correctivo-container" style="width: 45%;"></div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 4px; width: 85%; margin: 0 auto 10px auto;">
                    ${this.btn("CORRECTIVOS PROGRAMADOS", "#f9b218")}
                    ${this.btn("CORRECTIVOS A EDIFICIOS", "#00bcd4")}
                    ${this.btn("BITÁCORA DE OS", "#ffffff")}
                </div>

                <div style="margin-top: auto; padding-bottom: 10px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <div style="color: #f9b218; font-size: 11px; font-weight: bold; border-bottom: 1px solid #f9b218; width: 48%; text-align: center;">DETS. PERSONAL MANTTO.</div>
                        <div style="color: #f9b218; font-size: 11px; font-weight: bold; border-bottom: 1px solid #f9b218; width: 48%; text-align: center;">PENDIENTES COMPRAS</div>
                    </div>
                    <div style="display: flex; justify-content: space-between; height: 75px;">
                        <div id="personal-mantto-scroll" style="width: 48%; background: rgba(0,0,0,0.2); border-radius: 4px; overflow-y: auto;"></div>
                        <div id="compras-pendientes-scroll" style="width: 48%; background: rgba(0,0,0,0.2); border-radius: 4px; overflow-y: auto;"></div>
                    </div>
                </div>
            </div>

            <div style="flex: 1; display: flex; flex-direction: column; padding: 5px 15px;">
                <div style="color: #ffffff; font-size: 18px; font-weight: bold; border-bottom: 2px solid #f9b218; padding-bottom: 2px; width: 100%; text-align: center; text-transform: uppercase; margin-bottom: 10px;">Mantto. Preventivo</div>
                
                <div id="preventivos-grafico-container" style="width: 100%; height: 200px; margin-bottom: 10px;"></div>
                
                <div style="margin-top: auto; padding-bottom: 10px; display: flex; flex-direction: column;">
                    <div style="color: #ff9999; font-size: 14px; font-weight: bold; border-bottom: 1px solid #ff9999; text-align: center; margin-bottom: 5px; text-transform: uppercase;">Accidentes</div>
                    <div id="accidentes-scroll" style="height: 75px; background: rgba(0,0,0,0.2); border-radius: 4px; border: 1px solid rgba(255,153,153,0.2); overflow-y: auto;">
                        </div>
                </div>
            </div>
        </div>`;
    },
    btn: function(t, c) {
        return `<button style="width: 100%; height: 24px; background: #2f5577; color: white; border: 1px solid ${c}; border-radius: 3px; font-size: 10px; font-weight: bold; cursor: pointer; text-transform: uppercase;">${t}</button>`;
    }
};
