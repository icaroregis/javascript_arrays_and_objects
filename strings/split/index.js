const frase = 'O rato roeu a roupa do Rei de Roma.';

//dividir strings
const dividirString = frase.split(' ');
console.log(dividirString);

//dividir retirando a letra passada.
const dividirTirandoaLetra = frase.split('r');
console.log(dividirTirandoaLetra);

//buscar uma quantidade específica de resultados.
const buscarQtde = frase.split(' ', 2);
console.log(buscarQtde);
