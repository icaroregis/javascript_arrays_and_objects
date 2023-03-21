/** @format */

let nomes = [];
let qtdeDeConvidados = Number(prompt('Digite o número de convidados'));

for (let i = 0; i < qtdeDeConvidados; i++) { 
   //1 forma: nomes[i] = prompt(`Digite o nome do convidado ${i}`);  
  nomes.push(prompt(`Digite o nome do convidado`));      
}

console.log(nomes)     
