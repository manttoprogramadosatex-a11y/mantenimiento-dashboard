const SatexEstatusDesign = {
    render: function(id) {
        document.getElementById(id).innerHTML = `
            <div style="background:rgba(0,0,0,0.15); height:55px; display:flex; align-items:center; padding:0 20px; gap:10px;">
                <div style="color:white; font-family:sans-serif; font-size:13px; font-weight:bold;">Estatus planta<br><span style="font-size:9px; opacity:0.7;">Info. Cardas ▶</span></div>
                <div id="data-husos-container" style="display:flex; gap:10px; align-items:center;"></div>
                <button style="background:#da291c; color:white; border:none; width:28px; height:28px; border-radius:4px; margin-left:auto; cursor:pointer;" onclick="location.reload()">X</button>
            </div>`;
    }
};
