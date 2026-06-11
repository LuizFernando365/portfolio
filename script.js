const btnAbrirMenuMobile  = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#titulo_mobile');

btnAbrirMenuMobile.addEventListener('click',()=>{
    menuMobile.classList.add('abrir-menu');
})

menuMobile.addEventListener('click',()=>{
    menuMobile.classList.remove('abrir-menu');
})