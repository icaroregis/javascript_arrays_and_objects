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
      return (resultado.innerHTML += `<p>Abaixo do Peso</p>`);
    }

    if (result >= 18.5 && result < 24.9) {
      return (resultado.innerHTML += `<p>Peso Normal</p>`);
    }

    if (result >= 25 && result < 29.9) {
      return (resultado.innerHTML += `<p>Sobrepeso</p>`);
    }

    if (result >= 30 && result < 34.9) {
      return (resultado.innerHTML += `<p>Obsesidade Grau I</p>`);
    }

    if (result >= 35 && result < 39.9) {
      return (resultado.innerHTML += `<p>Obsesidade Grau II</p>`);
    }

    if (result > 40) {
      return (resultado.innerHTML += `<p>Obsesidade Grau III</p>`);
    }

    return (resultado.innerHTML += `<p>Altura ou peso inválido</p>`);
  }

  function limpar(peso, altura) {
    peso.value = '';
    altura.value = '';
  }
})();
