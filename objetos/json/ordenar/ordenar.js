const clientes = require('./cliente.json');

//ordem crescente
function ordenar(lista, propriedade) {
  const result = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }

    return 0;
  });

  return result;
}

const ordemCrescente = ordenar(clientes, 'nome');
const ordemDescrescente = ordemCrescente.reverse();

//ou dessa forma para descrescente
function ordenar(lista, propriedade, ordem = 'crescente') {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });

  if (ordem !== 'crescente') {
    resultado.reverse();
  }

  return resultado;
}

console.log(ordenar(clientes, 'nome'));
console.log(ordemDescrescente);
