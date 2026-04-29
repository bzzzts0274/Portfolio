// GRÁFICA
const ctx = document.getElementById('grafica').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Redes', 'Educación', 'Seguridad'],
        datasets: [{
            label: 'Uso (%)',
            data: [80, 70, 50],
            backgroundColor: ['#00f7ff', '#ff00ff', '#00ff88']
        }]
    }
});

// CARRUSEL CON FLECHAS
new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2500
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

// BOTÓN ALERTA
document.getElementById("boton1").onclick = () => {
    alert("🔥 Botón funcionando correctamente");
};

// BOTÓN CAMBIO COLOR
document.getElementById("boton2").onclick = () => {
    document.body.style.background = "#161146";
};