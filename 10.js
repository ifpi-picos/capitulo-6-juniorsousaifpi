// Função para calcular a média de dois números
const calcularMedia = (num1, num2) => (num1 + num2) / 2;

// Função principal que solicita números, calcula a média e exibe o resultado
const solicitarNumeros = () => {
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        console.error("Por favor, insira valores numéricos válidos.");
        return;
    }

    const media = calcularMedia(numero1, numero2);
    console.log(`A média entre ${numero1} e ${numero2} é ${media}.`);
};

// Executa o programa
solicitarNumeros();
