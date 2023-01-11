const notas = [8, 10, 5, 9, 3, 8, 4];

//adicionar
notas.push(4.5);

//remover
notas.pop();

function returnTotal() {
  let total = 0;

  for (let i = 0; i < notas.length; i++) {
    total = total + notas[i];
  }

  const media = total / notas.length;
  return `A média do aluno é ${media}`;
}

console.log(returnTotal());
