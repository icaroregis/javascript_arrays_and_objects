const pessoa = {
  nome: 'Bruce Banner',
  dataNascimento: '25/01/1980',
  carteiraIdentidade: '997776-X',
  email: 'profbanner@email.com',
  telefone: '+552877776666',
  cidade: 'Cachoeiro de Itapemirim',
  estado: 'ES',
};

pessoa.cpf = '059.548.938-97';
pessoa.seguroSocial = '854321985-9';

//mostrar aṕenas os primeiros 4 dígitos do cpf.
//substring mostra um numero determinado de caracteres de acordo com o indice passado
console.log(pessoa.cpf.substring(0, 5).replace('.', ''));
