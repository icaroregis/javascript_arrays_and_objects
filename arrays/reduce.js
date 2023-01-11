const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

//1 parametro => um acumulador(iterador).
//2 parametro => valor inicial do acumulador logo após as chaves.
//3 não altera o array original.
function calculaMedia(notasDaSala) {
  const soma = notasDaSala.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);

  const mediaDaSala = soma / notasDaSala.length;
  return mediaDaSala;
}

console.log(`A média da sala de javascript é: ${calculaMedia(salaJS)}`);
