// Função para realizar a adição
const adicao = (a, b) => a + b;

// Função para realizar a subtração
const subtracao = (a, b) => a - b;

// Função para realizar a multiplicação
const multiplicacao = (a, b) => a * b;

// Função para realizar a divisão
const divisao = (a, b) => {
    if (b === 0) {
        console.error("Erro: Não é possível dividir por zero.");
        return null; // Retorna null em caso de erro
    }
    return a / b;
};

// Função para exibir o resultado
const exibirResultado = (resultado) => {
    if (resultado !== null) {
        console.log("Resultado: " + resultado);
    }
};

// Função principal da calculadora
const calculadora = () => {
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));
    
    const operacao = prompt("Escolha a operação (+, -, *, /):");

    let resultado;

    switch (operacao) {
        case "+":
            resultado = adicao(numero1, numero2);
            break;
        case "-":
            resultado = subtracao(numero1, numero2);
            break;
        case "*":
            resultado = multiplicacao(numero1, numero2);
            break;
        case "/":
            resultado = divisao(numero1, numero2);
            break;
        default:
            console.error("Operação inválida.");
            return;
    }

    exibirResultado(resultado);
};

// Inicia a calculadora
calculadora();

