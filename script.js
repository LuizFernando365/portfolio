const btnAbrirMenuMobile  = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#titulo_mobile');

btnAbrirMenuMobile.addEventListener('click',()=>{
    menuMobile.classList.add('abrir-menu');
})

menuMobile.addEventListener('click',()=>{
    menuMobile.classList.remove('abrir-menu');
})

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.1
});

reveals.forEach((element) => {
    observer.observe(element);
});