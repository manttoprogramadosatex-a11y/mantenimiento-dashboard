/* lib_cardas_engine.js */
const CardasEngine = {
    async actualizarCardas() {
        const datos = await SatexDataLoader.obtenerDatosCardas();
        if (!datos) return;

        const contenedor = document.getElementById('cardas-container');
        if (!contenedor) return;

        contenedor.innerHTML = '';
        datos.forEach(carda => {
            const cardElement = CardasDesign.crearCarda(carda);
            contenedor.appendChild(cardElement);
        });
    }
};

// Ejecución inicial
document.addEventListener('DOMContentLoaded', () => {
    CardasEngine.actualizarCardas();
    // Actualizar cada 5 minutos
    setInterval(() => CardasEngine.actualizarCardas(), 300000);
});
