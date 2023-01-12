//1. Não podemos criar variáveis com palavras reservadas da linguagem.
//2. Variáveis precisam ter nomes significativos.
//3. Não pode começar a varável com um número.
//4. Não podem conter espaços ou traços. Mas pode-se usar underscore ex. nome_completo.
//5. Usar let.
//6. A constante deve ser criada e inicializada ao mesmo tempo. A let pode ser declarada mas aceita não ser inicializada.

let primeiro_nome;
primeiro_nome = 'Ícaro';

let sobrenome_pessoa = 'Régis';
let esposa = 'Thayná';

console.log(`${primeiro_nome} nasceu em 1993.`);
console.log(`Em  2021 ${primeiro_nome} conheceu Thayná.`);
console.log(`${primeiro_nome} casou-se co Thayná em junho de 2022`);
console.log(`${esposa} teve um filho com ${primeiro_nome} em junho 2023`);

const nome_2 = 'Felipe Aquino';
const primeiro_numero = 5;
const segundo_numero = 10;
const total = primeiro_numero * segundo_numero;

console.log(total);
