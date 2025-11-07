// Variáveis do carrossel
let slideAtual = 0;
const slides = document.querySelectorAll('.carrossel-imagem');
const totalSlides = slides.length;
let slideInterval;
const tempoTroca = 5000; // 5 segundos

// Inicializa o carrossel
function iniciarCarrossel() {
  if (slides.length === 0) return;
  
  // Mostra o primeiro slide
  if (slides[0]) slides[0].classList.add('ativo');
  atualizarContador();
  
  // Inicia o intervalo para troca automática
  slideInterval = setInterval(proximoSlide, tempoTroca);
  
  // Pausa o carrossel quando o mouse está sobre ele
  const container = document.querySelector('.carrossel-container');
  if (container) {
    container.addEventListener('mouseenter', pausarCarrossel);
    container.addEventListener('mouseleave', retomarCarrossel);
  }
}

// Função para mudar de slide
function mudarSlide(direcao) {
  // Reinicia o temporizador
  reiniciarIntervalo();
  
  // Remove a classe 'ativo' do slide atual
  if (slides[slideAtual]) slides[slideAtual].classList.remove('ativo');
  
  // Calcula o próximo slide
  slideAtual = (slideAtual + direcao + totalSlides) % totalSlides;
  
  // Adiciona a classe 'ativo' ao próximo slide
  if (slides[slideAtual]) slides[slideAtual].classList.add('ativo');
  
  // Atualiza o contador
  atualizarContador();
}

// Função para ir para o próximo slide
function proximoSlide() {
  mudarSlide(1);
}

// Função para atualizar o contador de slides
function atualizarContador() {
  const contador = document.getElementById('contador-slide');
  if (contador) {
    contador.textContent = `${slideAtual + 1}/${totalSlides}`;
  }
}

// Função para pausar o carrossel
function pausarCarrossel() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
}

// Função para retomar o carrossel
function retomarCarrossel() {
  pausarCarrossel();
  slideInterval = setInterval(proximoSlide, tempoTroca);
}

// Função para reiniciar o intervalo
function reiniciarIntervalo() {
  pausarCarrossel();
  retomarCarrossel();
}

// Inicia o carrossel quando a página carregar
document.addEventListener('DOMContentLoaded', iniciarCarrossel);

// Torna as funções disponíveis globalmente para os botões
window.mudarSlide = mudarSlide;
