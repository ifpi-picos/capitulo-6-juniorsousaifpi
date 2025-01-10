let variavelBloco = "voce e global!";

const minhaFuncao = () => {
    const variavelGlobal = "Você é uma variável global";
    const variavelLocal = "Você é uma variável local";

    // Acessando variáveis dentro da função
    console.log("Dentro da função:");
    console.log(variavelLocal); // Pode acessar a variável local
    console.log(variavelGlobal); // Pode acessar a variável global
};

// Chamando a função
minhaFuncao();

// Acessando variáveis fora da função
console.log("\nFora da função:");
const variavelGlobal = "Você é uma variável global"; // Definida novamente
console.log(variavelGlobal); // Pode acessar a variável global
try {
    console.log(variavelLocal); // Não acessível
} catch (e) {
    console.error("Erro: " + e.message);
}
