const clientes = require('./cliente.json');

//O método hasOwnProperty verifica se existe a propriedade do objeto que estamos passando. Quando colocamos a exclamação estamos perguntando se não existir aquela propriedade.
function filtrarAptoSemComplemento(lista) {
  const result = lista.filter((cliente) => {
    return (
      cliente.endereco.apartamento === true &&
      !cliente.endereco.hasOwnProperty('complemento')
    );
  });

  return result;
}

console.log(filtrarAptoSemComplemento(clientes));
