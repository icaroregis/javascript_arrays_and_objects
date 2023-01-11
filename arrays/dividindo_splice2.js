const animais = ['tubarão', 'polvo', 'golfinho', 'baleia'];

//adicionando o caranguejo no indice 1 sem tirar ninguem ja que o segundo parametro é zero.
animais.splice(1, 0, 'caranguejo');

//a partir doi indice 3(golfinho) excluimos 2 animais(golfinho e baleia) e adicionamos o peixe espada.
animais.splice(3, 2, 'peixe espada');

console.log(animais);
