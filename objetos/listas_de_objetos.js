const cliente = {
  nome: 'Joao',
  idade: 24,
  email: 'joao@firma.com',
  telefone: ['1155555550', '1144444440'],
};

cliente.enderecos = [
  {
    id: 1,
    rua: 'R. Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
  },
  {
    id: 2,
    rua: 'R. Abolição',
    numero: 4555,
    apartamento: false,
    complemento: 'ap 301',
  },
  {
    id: 3,
    rua: 'R. Marechal Limber',
    numero: 144,
    apartamento: false,
    complemento: 'ap 400',
  },
];

const filtrado = cliente.enderecos.filter((endereco) => {
  return endereco.apartamento === false;
});

console.log(filtrado, 'filtro');
