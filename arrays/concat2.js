const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listasDeAlunosEMedias = [[...alunos], [...medias]];

console.log(listasDeAlunosEMedias);

//Estou acesando o primeiro array e depois acessando o segundo item desse array. Geralmente essa notação é usada quando queremos acessar uma lista dentro de uma lista.
console.log(
  `A aluna da posição 1 da lista de alunos é: ${listasDeAlunosEMedias[0][1]} \n`,
  `A nota da aluno(a) ${listasDeAlunosEMedias[0][1]} é: ${listasDeAlunosEMedias[1][1]}`,
);
