let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {
    // Quita la clase active de todos los slides y puntos
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });

    // Añade la clase active al seleccionado
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

// Evento click para los puntos del slider
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Inicializar el primer slide
showSlide(0);

// Lógica del menú móvil
const menuToggle = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

// Lógica del dropdown en móvil
const dropdownItems = document.querySelectorAll('.menu-item-dropdown');
dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            item.classList.toggle('active');
        }
    });
});