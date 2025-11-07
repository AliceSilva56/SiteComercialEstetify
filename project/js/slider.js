// Navegação do slider principal
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const btnPrev = document.getElementById('prev');
    const btnNext = document.getElementById('next');
    
    if (slides.length > 0 && btnPrev && btnNext) {
        let current = 0;
        
        // Mostra o primeiro slide
        slides[0].classList.add('active');
        
        // Função para ir para o próximo slide
        function nextSlide() {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }
        
        // Função para ir para o slide anterior
        function prevSlide() {
            slides[current].classList.remove('active');
            current = (current - 1 + slides.length) % slides.length;
            slides[current].classList.add('active');
        }
        
        // Adiciona os event listeners
        btnNext.addEventListener('click', nextSlide);
        btnPrev.addEventListener('click', prevSlide);
    }
});
