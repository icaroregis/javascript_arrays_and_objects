const clientes = require('./cliente.json');

//Não altera o array original, nesse caso devemos salvar dentro de uma variável para depois retornar o seu valor dentro dessa variável.
function buscar(lista, chave, valor) {
  const resultado = lista.find((item) => {
    return item[chave] === valor;
  });

  return resultado;
}

console.log(buscar(clientes, 'nome', 'Kirby'));
