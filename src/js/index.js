//- 1 Passo// dar um jeito de pegar o elemento html dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
//- 2 passo// dar um jeito de identificar o clique do usuário no botao

botoesCarrossel.forEach((botao , indice) => {
    botao.addEventListener('click', () => {
        //passo 3// desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //4 passo// marcar o botão clicado como se estivesse selecionado
        MarcarBotaocomoseestivesseselecionado(botao);

        //5 passo// escoder a imagem anteriormente selecionada
        esconderimagemativa();

        //passo 6// fazer aparecer a imagem correspondente ao botão clicado
        mostrarimagemdefundo(indice);

        //7 passo// esconder a informação do dragão anteriormente selecionado
        escondendoinformacoesAtivas();

        //8 passo// mostrar a informação do dragão referente ao botão clicado
        MostrarInformacoes(indice);
    });
});

function MostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function escondendoinformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarimagemdefundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderimagemativa() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function MarcarBotaocomoseestivesseselecionado(botao) {
    botao.classList.add("selecionado");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

