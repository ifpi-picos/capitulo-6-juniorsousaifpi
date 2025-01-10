// Função para gerar um número aleatório entre 1 e 100
const gerarNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;

// Função para verificar o palpite do usuário
const verificarPalpite = (palpite, numeroSecreto) => {
    if (palpite === numeroSecreto) return "correto";
    return palpite < numeroSecreto ? "menor" : "maior";
};

// Função principal do jogo
const jogoAdivinhacao = () => {
    const numeroSecreto = gerarNumeroAleatorio();
    let tentativasRestantes = 10;
    let acertou = false;

    console.log("Bem-vindo ao jogo de adivinhação!");
    console.log("Tente adivinhar o número secreto entre 1 e 100.");
    console.log("Você tem até 10 tentativas!");

    while (tentativasRestantes > 0 && !acertou) {
        const palpite = parseInt(prompt(`Digite seu palpite (Tentativas restantes: ${tentativasRestantes}):`), 10);

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log("Por favor, insira um número válido entre 1 e 100.");
            continue;
        }

        const resultado = verificarPalpite(palpite, numeroSecreto);

        if (resultado === "correto") {
            console.log(`Parabéns! Você acertou! O número secreto era ${numeroSecreto}.`);
            acertou = true;
        } else {
            tentativasRestantes--;
            console.log(`Seu palpite está ${resultado}!`);
            if (tentativasRestantes === 0) {
                console.log(`Você perdeu! O número secreto era ${numeroSecreto}.`);
            }
        }
    }
};

// Inicia o jogo
jogoAdivinhacao();
bu