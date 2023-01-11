//require é uma função do nodeJs que nos permite puxar um código de outro lugar/diretório.
const dados = require('./cliente.json');
console.log(dados);

//transforma em string
const dadosEmString = JSON.stringify(dados);
console.log(dadosEmString, 'string');

//transforma em objeto
const transformarEmObjeto = JSON.parse(dadosEmString);
console.log(transformarEmObjeto, 'objeto');
