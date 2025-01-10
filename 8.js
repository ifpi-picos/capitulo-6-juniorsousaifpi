function verificarEscopo() {
    if (true) {
        let variavelBloco = "Você existe apenas dentro deste bloco!";
        console.log("Dentro do bloco: " + variavelBloco); // Acessível
    }

    try {
        console.log("Fora do bloco: " + variavelBloco); // Não acessível
    } catch (e) {
        console.error("Erro: " + e.message); // Erro porque a variável não existe
    }
}

verificarEscopo();
