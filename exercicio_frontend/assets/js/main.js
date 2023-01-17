(() => {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    if (!peso && !altura) {
      alert('Prencha todos os campos!!!');
      return;
    }

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

    return exibirMensagem('Altura ou peso inválido', result);
  }

  function limpar(peso, altura) {
    peso.value = '';
    altura.value = '';
  }

  function exibirMensagem(msg, result) {
    resultado.innerHTML = '';
    resultado.innerHTML += `<p>Seu imc é de: ${result}. ${msg}</p>`;
    setTimeout(() => {
      resultado.innerHTML = '';
    }, 3000);
  }
})();
