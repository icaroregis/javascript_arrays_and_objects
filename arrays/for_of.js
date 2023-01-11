const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
for (let i of notas) {
  somaDasNotas = somaDasNotas + i;
}

const media = somaDasNotas / notas.length;
console.log(`A média é ${media}`);
