function calcularMedia(numero1, numero2, numero3) {
    // Converte as entradas em números inteiros usando parseInt
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    numero3 = parseInt(numero3);
    
    // Verifica se as entradas são números válidos
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        console.log("Por favor, insira números válidos.");
        return;
    }
    
    // Calcula a média
    let media = (numero1 + numero2 + numero3) / 3;
    
    // Arredonda para baixo usando Math.floor()
    let mediaArredondada = Math.floor(media);
    
    // Exibe a média arredondada no console
    console.log("A média arredondada dos números é:", mediaArredondada);
}

// Testando a função com valores de entrada
calcularMedia("7", "6", "9");  // Exemplo com números passados como strings
