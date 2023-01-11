/* Crie uma função que recebe como argumento o nome de um aluno.
Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice. 
Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado. */

const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

//includes => para ver se o parametro passado esta incluso dentro do array. Se sim retornará true.
function exibirNomeENota(nome_do_aluno) {
  if (listaDeAlunosEMedias[0].includes(nome_do_aluno)) {
    const [alunos, medias] = listasDeAlunosEMedias;
    const index = alunos.indexOf(nome_do_aluno);
    const nota = medias[index];
    return `O Aluno ${nome_do_aluno} está cadastrado e sua média é ${nota}`;
  } else {
    console.log(`Aluno não encontrado!`);
  }
}

console.log(exibirNomeENota('Juliana'));
