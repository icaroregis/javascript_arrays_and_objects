const alunos = ['Icaro', 'Regis', 'Almeida'];

//Usamos o indexOf para sabermos o index do elemento no array.
const index = alunos.indexOf('Almeida');
console.log(index);

//Também podemos usar para textos, aqui no cao nos mostrará aonde começa o índice do argumentro passado
const array = 'Viva Cristo Rei!';
const indexdoElemento = array.indexOf('Cristo');
console.log(indexdoElemento);

//Faz a busca sempre pelo ultimo elemento da string
const lastIndexOff = array.lastIndexOf('Cristo');
console.log(lastIndexOff);

//Replace substitui o argumento passado pelo outro argumento passado
const substituir = array.replace('Cristo Rei', 'Nossa Senhora de Pompeia');
console.log(substituir);
