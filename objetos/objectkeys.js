const cliente = {
  nome: 'Joao',
  idade: 24,
  email: 'joao@firma.com',
  telefone: ['1155555550', '1144444440'],
};

/*cliente.enderecos = [ 
  {
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
  },
];*/

//Pega as chaves de um objeto e colocas-as em um array.
const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

//senão existir uma chave chamada enderecos retorna um erro.
if (!chavesDoObjeto.includes('enderecos')) {
  console.error('Erro. É necessário ter um endereço cadastrado!!!');
}
