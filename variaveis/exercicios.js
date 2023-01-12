/* imc => peso / (altura * altura) */
const nome = 'Icaro';
const sobrenome = 'Régis';
const idade = 30;
const peso = 110;
const alturaEmMetros = 1.8;
let anoNascimento;
let imc;

function getInformation(
  nome,
  sobrenome,
  idade,
  peso,
  alturaEmMetros,
  anoNascimento,
  imc,
) {
  imc = peso / (alturaEmMetros * alturaEmMetros);
  anoNascimento = new Date().getFullYear() - idade;

  return `${nome} ${sobrenome} tem ${idade} e pesa ${peso}. \n Tem ${alturaEmMetros.toFixed(
    2,
  )} e seu IMC é de : ${imc.toFixed(
    2,
  )}.\n ${nome} ${sobrenome} nasceu em: ${anoNascimento}`;
}

console.log(
  getInformation(
    nome,
    sobrenome,
    idade,
    peso,
    alturaEmMetros,
    anoNascimento,
    imc,
  ),
);
