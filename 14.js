// Função para ler o peso do usuário
const lerPeso = () => {
    const peso = parseFloat(prompt("Digite seu peso em kg:"));
    if (isNaN(peso) || peso <= 0) {
        console.error("Por favor, insira um peso válido maior que zero.");
        return null;
    }
    return peso;
};

// Função para ler a altura do usuário
const lerAltura = () => {
    const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
    if (isNaN(altura) || altura <= 0) {
        console.error("Por favor, insira uma altura válida maior que zero.");
        return null;
    }
    return altura;
};

// Função para calcular o IMC
const calcularIMC = (peso, altura) => {
    return peso / (altura * altura);
};

// Função para determinar a categoria de peso com base no IMC
const determinarCategoria = (imc) => {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
};

// Função para exibir o resultado
const exibirResultado = (imc, categoria) => {
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Categoria: ${categoria}`);
};

// Função principal para calcular e exibir o IMC
const calcularIMCUsuario = () => {
    const peso = lerPeso();
    if (peso === null) return;

    const altura = lerAltura();
    if (altura === null) return;

    const imc = calcularIMC(peso, altura);
    const categoria = determinarCategoria(imc);

    exibirResultado(imc, categoria);
};

// Executa o programa
calcularIMCUsuario();
