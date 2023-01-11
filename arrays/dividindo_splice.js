/*  Temos que criar uma lista de chamada com os seguintes alunos:

João
Ana
Caio
Lara
Marjorie
Leo
Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo. */

const alunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

/*  
1. splice => emendar/juntar.   
2. Altera o array original.
3. O primeiro parâmetro do método splice() é o índice do elemento que queremos remover. Portanto, para remover o nome de Ana, passamos o índice 1:
4. O segundo parâmetro é a quantidade de itens que queremos remover a partir desse índice. Logo, para remover o nome de Ana e de Caio, informaremos o valor 2: 
5. O método splice() aceita um terceiro parâmetro. Então, vamos colocar a string "Rodrigo". Assim, vamos remover os nomes de Ana e Caio, e inserir Rodrigo no lugar. Após salvar o arquivo, vamos executá-lo no terminal:
*/
const novoArray = alunos.splice(1, 2, 'Rodrigo');
console.log(novoArray, 'alunos que foram removidos');
console.log(alunos, 'array original');
