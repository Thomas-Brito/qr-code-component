{
  const caixa = document.getElementById("minha-caixa"); // Caixa interativa
  const abre = document.getElementById("abrir-caixa"); // Botão de abrir
  const fecha = document.getElementsByClassName("fechar-caixa")[0]; // Botão de fechar

  // Mostra a caixa interativa ao clicar no botão de abrir
  abre.onclick = function () { 
    caixa.style.display = "block";
  }

  // Para de mostrar a caixa interativa ao clicar no botão de fechar
  fecha.onclick = function () {
    caixa.style.display = "none";
  }
}

{
  // Função que muda o tema de acordo com o evento de mudança de seleção de botão radio, com base no value='' do name='tema'
  function mudarTema(event) {
    const temaAtual = event.target.value;
    document.documentElement.setAttribute("data-theme", temaAtual);
  }

  const botoesTema = document.querySelectorAll('input[name="tema"]');
  botoesTema.forEach((botao) => {
    botao.addEventListener("change", mudarTema);
  })
}