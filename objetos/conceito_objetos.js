const pessoa = {
  nome: 'Icaro Régis',
  idade: 29,
  altura: 1.78,
};

//acesando ropriedades de um objeto.
console.log(pessoa.altura);
console.log(pessoa.idade);
console.log(pessoa.nome);

console.log(pessoa['altura'], 'acessando pelos colchetes');
console.log(pessoa['idade'], 'acessando pelos colchetes');
console.log(pessoa['nome'], 'acessando pelos colchetes');

const chavesDoObjeto = ['nome', 'idade', 'altura'];

chavesDoObjeto.forEach((chave) => {
  console.log(`A ${chave} tem valor ${pessoa[chave]}`);
});

//excluindo propriedades de um objeto.
delete pessoa.altura;
console.log(pessoa);
