let str = "1234";
let num = parseInt(str);
console.log(num);
Se a string começar com um caractere que não seja numérico:

javascript
Copiar código
let invalidStr = "abc123";
let invalidNum = parseInt(invalidStr);
console.log(invalidNum); // NaN
2. parseFloat()
Similar ao parseInt(), mas parseFloat() converte uma string em um número decimal (ponto flutuante).

Exemplo:
javascript
Copiar código
let floatStr = "3.14";
let floatNum = parseFloat(floatStr);
console.log(floatNum); 
Se a string contiver texto após um número válido:

javascript
Copiar código
let mixedStr = "3.14abc";
let result = parseFloat(mixedStr);
console.log(result); 
3. isNaN()
A função isNaN() verifica se o valor passado não é um número (NaN). Retorna true se o valor for NaN e false caso contrário.

Exemplo:
javascript
Copiar código
let value1 = "123";
let value2 = "abc";

console.log(isNaN(value1))
console.log(isNaN(value2));
4. Number()
A função Number() converte qualquer valor passado como argumento em um número. Isso pode ser útil quando você quer garantir que um valor seja tratado como número.

Exemplo:
javascript
Copiar código
let str = 
let num = Number(str);
console.log(num); // 42
Se não for possível converter a string para um número válido:

javascript
Copiar código
let invalidStr = "Hello";
let result = Number(invalidStr);
console.log(result); // NaN
5. String()
A função String() converte qualquer valor em uma string.

Exemplo:
javascript
Copiar código
let num =
let str = String(num);
console.log(str); 
6. toString()
O método toString() é uma função que pode ser chamada em números, arrays e objetos para converter esses valores em uma representação de string.
