// Função para ler o valor em reais
const lerValorReal = () => {
    const valorReal = parseFloat(prompt("Digite o valor em reais:"));
    if (isNaN(valorReal) || valorReal <= 0) {
        console.error("Por favor, insira um valor válido maior que zero.");
        return null;
    }
    return valorReal;
};

// Função para realizar a conversão de reais para dólares
const converterParaDolar = (valorReal, taxaConversao) => {
    return valorReal / taxaConversao;
};

// Função para exibir o resultado
const exibirResultado = (valorEmDolar) => {
    if (valorEmDolar !== null) {
        console.log(`O valor em dólares é: $${valorEmDolar.toFixed(2)}`);
    }
};

// Função principal do conversor
const conversorDeMoeda = () => {
    const taxaConversao = 5.25; // Taxa de conversão de 1 real para dólares (valor fictício)
    
    const valorReal = lerValorReal();
    if (valorReal === null) return;

    const valorEmDolar = converterParaDolar(valorReal, taxaConversao);
    
    exibirResultado(valorEmDolar);
};

// Executa o conversor
conversorDeMoeda();
