let progress = 0;
const progressBar = document.getElementById('progress');
const percentageText = document.getElementById('percentage');
const splash = document.getElementById('splash');
const welcome = document.getElementById('welcome');
const dots = document.getElementById('dots');

// Animação dos pontos
let dotCount = 1;
const dotAnimation = setInterval(() => {
    dotCount = (dotCount % 3) + 1; // Alterna entre 1 a 3 pontos
    dots.textContent = '.'.repeat(dotCount);
}, 500); // Ajuste o intervalo conforme desejado

// Carregamento
const loadingInterval = setInterval(() => {
    if (progress >= 100) {
        clearInterval(loadingInterval);
        clearInterval(dotAnimation); // Para a animação dos pontos
        splash.style.display = 'none';
        welcome.style.display = 'block';
    } else {
        progress++;
        progressBar.style.width = progress + '%';
        percentageText.textContent = progress + '%';
    }
}, 25); // Ajuste a velocidade do carregamento se necessário