(() => {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let nome = form.querySelector('.nome');
    let sobrenome = form.querySelector('.sobrenome');
    let peso = form.querySelector('.peso');
    let altura = form.querySelector('.altura');

    if (
      nome.value === '' &&
      sobrenome.value === '' &&
      peso.value === '' &&
      altura.value === ''
    ) {
      setTimeout(() => {
        alert(`Todos os campos são obrigatórios`);
      }, '1000');

      return;
    }
    return pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

    limpar(nome, sobrenome, peso, altura);
  });

  function limpar(nome, sobrenome, peso, altura) {
    nome.value = '';
    sobrenome.value = '';
    peso.value = '';
    altura.value = '';
  }
})();
