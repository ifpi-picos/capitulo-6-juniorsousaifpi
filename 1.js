. Entrada e Saída de Dados
Funções relacionadas a interação com o usuário:
alert() — Exibe uma caixa de diálogo de alerta com uma mensagem.
prompt() — Exibe uma caixa de entrada onde o usuário pode digitar algo.
confirm() — Exibe uma caixa de confirmação com botões "OK" e "Cancel".
console.log() — Exibe uma mensagem no console, usado principalmente para depuração.
console.error() — Exibe uma mensagem de erro no console.
console.warn() — Exibe um aviso no console.
console.table() — Exibe um array ou objeto em forma de tabela no console.
2. Manipulação de Strings
Funções para trabalhar com strings:
String.prototype.charAt() — Retorna o caractere em uma posição específica de uma string.
String.prototype.concat() — Concatena duas ou mais strings.
String.prototype.indexOf() — Retorna a posição da primeira ocorrência de um valor em uma string.
String.prototype.includes() — Verifica se uma string contém outra string (retorna true ou false).
String.prototype.slice() — Extrai uma parte de uma string, sem alterar a original.
String.prototype.split() — Divide uma string em uma lista (array) de substrings com base em um separador.
String.prototype.replace() — Substitui uma parte de uma string por outra.
String.prototype.toLowerCase() — Converte todos os caracteres de uma string para minúsculas.
String.prototype.toUpperCase() — Converte todos os caracteres de uma string para maiúsculas.
String.prototype.trim() — Remove espaços em branco do início e do final de uma string.
3. Manipulação de Arrays
Funções para trabalhar com arrays:
Array.prototype.push() — Adiciona um ou mais elementos no final de um array.
Array.prototype.pop() — Remove o último elemento de um array.
Array.prototype.shift() — Remove o primeiro elemento de um array.
Array.prototype.unshift() — Adiciona um ou mais elementos no início de um array.
Array.prototype.concat() — Junta dois ou mais arrays.
Array.prototype.join() — Junta todos os elementos de um array em uma string.
Array.prototype.slice() — Retorna uma cópia rasa de uma parte de um array.
Array.prototype.splice() — Altera o conteúdo de um array, adicionando ou removendo elementos.
Array.prototype.forEach() — Executa uma função em cada elemento de um array.
Array.prototype.map() — Cria um novo array com os resultados da execução de uma função para cada elemento do array.
Array.prototype.filter() — Cria um novo array com todos os elementos que passarem no teste de uma função.
Array.prototype.reduce() — Aplica uma função de redução a cada elemento de um array para reduzir a um único valor.
Array.prototype.some() — Verifica se pelo menos um elemento de um array passa no teste de uma função.
Array.prototype.every() — Verifica se todos os elementos de um array passam no teste de uma função.
4. Manipulação de Objetos
Funções para trabalhar com objetos:
Object.keys() — Retorna um array contendo as chaves (nomes das propriedades) de um objeto.
Object.values() — Retorna um array contendo os valores das propriedades de um objeto.
Object.entries() — Retorna um array contendo pares [chave, valor] de um objeto.
Object.assign() — Copia todas as propriedades de um ou mais objetos para um objeto de destino.
Object.freeze() — Congela um objeto, impedindo que suas propriedades sejam alteradas.
Object.is() — Compara dois valores e retorna true se forem iguais.
Object.create() — Cria um novo objeto com o protótipo especificado.
5. Funções Matemáticas
Funções para realizar operações matemáticas:
Math.abs() — Retorna o valor absoluto de um número.
Math.round() — Arredonda um número para o inteiro mais próximo.
Math.floor() — Arredonda um número para baixo (para o inteiro mais próximo).
Math.ceil() — Arredonda um número para cima (para o inteiro mais próximo).
Math.max() — Retorna o maior valor entre os números fornecidos.
Math.min() — Retorna o menor valor entre os números fornecidos.
Math.random() — Retorna um número pseudo-aleatório entre 0 (inclusive) e 1 (exclusive).
Math.pow() — Retorna a base elevada à potência do expoente fornecido.
Math.sqrt() — Retorna a raiz quadrada de um número.
6. Funções de Data e Hora
Funções para trabalhar com datas e horas:
Date.now() — Retorna o número de milissegundos desde a época (1970-01-01 00:00:00 UTC).
Date.parse() — Analisa uma string e retorna o número de milissegundos desde a época.
Date.prototype.getDate() — Retorna o dia do mês de uma data.
Date.prototype.getMonth() — Retorna o mês de uma data (de 0 a 11).
Date.prototype.getFullYear() — Retorna o ano de uma data.
Date.prototype.getDay() — Retorna o dia da semana (de 0 a 6).
Date.prototype.getHours() — Retorna a hora de uma data.
Date.prototype.getMinutes() — Retorna os minutos de uma data.
Date.prototype.getSeconds() — Retorna os segundos de uma data.
Date.prototype.toISOString() — Converte uma data em uma string no formato ISO 8601.
7. Manipulação de Funções
Funções para manipulação de funções e escopo:
setTimeout() — Executa uma função após um intervalo de tempo (em milissegundos).
setInterval() — Executa uma função repetidamente, com um intervalo de tempo (em milissegundos).
clearTimeout() — Cancela a execução de uma função programada com setTimeout().
clearInterval() — Cancela a execução de uma função programada com setInterval().
Function.prototype.call() — Chama uma função com um valor de this específico e argumentos fornecidos.
Function.prototype.apply() — Chama uma função com um valor de this específico e um array de argumentos.
Function.prototype.bind() — Cria uma nova função com um valor de this fixado.
8. Funções Assíncronas
Funções para lidar com operações assíncronas:
setTimeout() — Executa uma função após um tempo específico (função assíncrona).
setInterval() — Executa uma função repetidamente em intervalos regulares (assíncrona).
Promise — Representa uma operação assíncrona que pode ser resolvida ou rejeitada.
Promise.resolve() — Cria uma promessa que é resolvida com um valor.
Promise.reject() — Cria uma promessa que é rejeitada com um erro.
then() — Encadeia uma ação a ser executada quando a promessa é resolvida.
catch() — Encadeia uma ação a ser executada quando a promessa é rejeitada.
finally() — Executa uma ação independente de a promessa ser resolvida ou rejeitada.
async/await — Sintaxe para trabalhar com funções assíncronas de maneira mais legível.
9. Outras Funções Úteis
Funções gerais úteis em JavaScript:
eval() — Executa código JavaScript representado por uma string.
isNaN() — Verifica se o valor passado não é um número (NaN).
parseInt() — Converte uma string para um número inteiro.
parseFloat() — Converte uma string para um número de ponto flutuante.
encodeURIComponent() — Codifica um componente de URI.
decodeURIComponent() — Decodifica um componente de URI.
Essas são algumas das funções predefinidas mais usadas em JavaScript, 