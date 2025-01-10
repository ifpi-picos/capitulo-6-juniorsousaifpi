let variavelGlobal = "você é uma variável global";

function minhaFuncao() {
    let variavelLocal = "você é uma variável local";

    // Acessando as variáveis dentro da função
    console.log("Dentro da função:");
    console.log(variavelLocal); // Pode acessar a variável local
    console.log(variavelGlobal); // Pode acessar a variável global
}

// Chamando a função
minhaFuncao();

// Acessando as variáveis fora da função
console.log("\nFora da função:");
console.log(variavelGlobal); // Pode acessar a variável global

try {
    console.log(variavelLocal); // Tenta acessar a variável local fora do escopo
} catch (e) {
    console.error("Erro: " + e.message);
}

    

