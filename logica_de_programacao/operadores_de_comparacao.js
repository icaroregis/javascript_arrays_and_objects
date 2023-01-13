/*
&& => irá para de executar quando encontrar: false && true => false "o valor mesmo" 

FALSY:
1. false
2. "", '', ``
3. 0
4. null
5. undefined
6. NaN.

*/

//&&
const isTrue = false;

function saudacao() {
  return 'Olá humano!!!';
}

console.log(isTrue && saudacao());

// ||
const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

//exercicio
const a = 0;
const b = null;
const c = 'false';
const d = NaN;

console.log(a || b || c || d);
