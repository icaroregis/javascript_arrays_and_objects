const alunos = [
  'João',
  'Juliana',
  'Ana',
  'Caio',
  'Lara',
  'Marjorie',
  'Guilherme',
  'Aline',
  'Fabiana',
  'Andre',
  'Carlos',
  'Paulo',
  'Bia',
  'Vivian',
  'Isabela',
  'Vinícius',
  'Renan',
  'Renata',
  'Daisy',
  'Camilo',
];

//Slice => fatiar.
//primeiro parametro de onde queremos que comece, segundo parametro aonde queremos que termine.
//Retorna um novo array.
//o slice tem uma péculiaridade se queremos pegar até o indice 9 temos que por o indice 10, ou seja, sempre posterior ao ultimo indice que desejamos que termine.

//1forma
//const sala1 = alunos.slice(0, 10);

//2 forma
const sala1 = alunos.slice(0, alunos.length / 2);

/*podemos passar também apenas o primeiro parametro que o slice entende que tera que pegar do primiero até o ultimo*/
//1 forma
//const sala2 = alunos.slice(10);
//2 forma
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1, 'sala 1');
console.log(sala2, 'sala 2');
