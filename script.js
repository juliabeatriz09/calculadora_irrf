
let slideIndex = 0;

function mostrarSlide(index) {
    const slides = document.querySelector('.slides');
    const imagens = document.querySelectorAll('.slides img');
    
    if (index >= imagens.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = imagens.length - 1;
    } else {
        slideIndex = index;
    }
    
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function mudarSlide(n) {
    mostrarSlide(slideIndex + n);
}

// Inicia o carrossel
mostrarSlide(slideIndex);



