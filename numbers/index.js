let number1 = 1;
let number2 = 3;
let number3 = 10.4567893131654654;

//transformar um dado do tipo number em string.
console.log(number1.toString() + number2);

//Pra fixar o tamanho das casas decimais de acordo com o argumento passado.
console.log(number3.toFixed(2));

//Checar se o número é do tipo inteiro. Retornará um booleano.
console.log(Number.isInteger(number3));

//Verificar se é um número.
const expressao = 100 * 'Olá';
console.log(Number.isNaN(expressao));
