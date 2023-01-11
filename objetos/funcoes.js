const cliente = {
  nome: 'Joao',
  idade: 24,
  email: 'joao@firma.com',
  telefone: ['1155555550', '1144444440'],
  saldo: 200,
  efetuarPagamento(valor) {
    if (valor > this.saldo) {
      console.log('Saldo insuficiente!');
    } else {
      this.saldo = this.saldo - valor;
      console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
    }
  },
};

console.log(cliente.efetuarPagamento(100));
console.log(cliente.saldo);

//quando criamos um novo objeto com Object.create é preservado o primeiro objeto em caso de uma nova atribuição a alguma propriedade do objeto, o que não aconteceria se fizessemos a copia do objeto original em uma outra variavel, caso quisessemos atribuir um novo valor a propriedade do segundo objeto criado emfunção do primeiro os dois seriam alterados.
const cliente2 = Object.create(cliente);

console.log(cliente, 'objeto 1');
console.log(cliente2, 'objeto 2');

console.log(cliente.email, 'objeto 1');
console.log((cliente.email = 'teste@teste.com.br'), 'objeto 2');
