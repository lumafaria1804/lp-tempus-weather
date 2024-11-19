const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

// Funções para mostrar e remover a classe "mostrar"
function mostrar() {
    imagensPainel[imagemAtual].classList.add("mostrar");
}

function remover() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove("mostrar");
    });
}

// Função para avançar o painel
function avancarPainel() {
    const totalDeImagens = imagensPainel.length - 1;

    if (imagemAtual === totalDeImagens) {
        imagemAtual = -1; // Reinicia para começar do início novamente
    }

    imagemAtual++;
    remover();
    mostrar();
}

// Função para voltar o painel
function voltarPainel() {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;
    remover();
    mostrar();
}

// Evento de clique para avançar
setaAvancar.addEventListener("click", avancarPainel);

// Evento de clique para voltar
setaVoltar.addEventListener("click", voltarPainel);

// Intervalo para avançar automaticamente a cada 3 segundos
setInterval(avancarPainel, 3000);

// Inicializar o painel mostrando a primeira imagem
mostrar();