(() => {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    const result = (
      Number(peso.value) /
      (Number(altura.value) * Number(altura.value))
    ).toFixed(1);

    Imc(result);
    limpar(peso, altura);
  });

  function Imc(result) {
    if (result < 18.5) {
      return exibirMensagem('Abaixo do Peso', result);
    }

    if (result >= 18.5 && result < 24.9) {
      return exibirMensagem('Peso Normal', result);
    }

    if (result >= 25 && result < 29.9) {
      return exibirMensagem('Sobrepeso', result);
    }

    if (result >= 30 && result < 34.9) {
      return exibirMensagem('Obsesidade Grau I', result);
    }

    if (result >= 35 && result < 39.9) {
      return exibirMensagem('Obsesidade Grau II', result);
    }

    if (result > 40) {
      return exibirMensagem('Obsesidade Grau III', result);
    }

    return invalid();
  }

  function limpar(peso, altura) {
    peso.value = '';
    altura.value = '';
  }

  function invalid() {
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = 'Peso ou altura inválidos!';
    paragrafo.classList.add('paragrafo-invalid');
    resultado.appendChild(paragrafo);

    setTimeout(() => {
      paragrafo.innerHTML = '';
      paragrafo.classList.remove('paragrafo-invalid');
    }, 3000);
  }

  function exibirMensagem(msg, result) {
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = `Seu imc é de: ${result}. ${msg}`;
    paragrafo.classList.add('paragrafo-ativo');
    resultado.appendChild(paragrafo);

    setTimeout(() => {
      paragrafo.innerHTML = '';
      paragrafo.classList.remove('paragrafo-ativo');
    }, 3000);
  }
})();
