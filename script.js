const html = document.documentElement;

function mudarTema() {
  const temaAtual = html.getAttribute("data-theme");
  const novoTema = temaAtual === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", novoTema);
}

document.getElementById("alternar").addEventListener("click", mudarTema);