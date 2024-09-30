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
}, 300); // Ajuste o intervalo conforme desejado

// Carregamento
const loadingInterval = setInterval(() => {
    if (progress >= 100) {
        clearInterval(loadingInterval);
        clearInterval(dotAnimation); // Para a animação dos pontos
        splash.style.display = 'none';
        welcome.style.display = 'block';
        animateDivs();
    } else {
        progress++;
        progressBar.style.width = progress + '%';
        percentageText.textContent = progress + '%';
    }
}, 16); // Ajuste a velocidade do carregamento se necessário

function animateDivs() {
    // Pega o ID das divs que ocorrerá a animação
    const div1 = document.getElementById("splash");
    const div2 = document.getElementById("welcome");
    const div3 = document.getElementById("login");
    const div4 = document.getElementById("register")
  
    // Adiciona a classe de animação para as divs
    div1.classList.add("animate-out");
    div2.classList.add("animate-in");
  }