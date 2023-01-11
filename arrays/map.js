//Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função callback retornar algum valor.

const notas = [10, 9.5, 8, 7, 6];

const adicionaUm = notas.map((nota) => {
  return nota + 1 > 10 ? nota : nota + 1;
});

console.log(adicionaUm);
