const btnAbrirMenuMobile  = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#titulo_mobile');

btnAbrirMenuMobile.addEventListener('click',()=>{
    menuMobile.classList.add('abrir-menu');
})

menuMobile.addEventListener('click',()=>{
    menuMobile.classList.remove('abrir-menu');
})

document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".surgir-abaixo");

  function checarScroll() {
    elementos.forEach((elemento) => {
      // Posição do topo do elemento em relação à tela
      const topoElemento = elemento.getBoundingClientRect().top;
      // Altura da janela do navegador
      const alturaTela = window.innerHeight;

      // Só ativa se o elemento estiver pelo menos 100px para dentro da tela do usuário
      if (topoElemento < alturaTela - 100) {
        elemento.classList.add("ativo");
      }
    });
  }

  // Roda a função uma vez ao entrar na página (para animar a primeira seção)
  checarScroll();

  // Roda a função toda vez que o usuário rolar a página
  window.addEventListener("scroll", checarScroll);
});