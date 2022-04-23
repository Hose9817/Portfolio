const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () =>{
    menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});

const counters = document.querySelectorAll('.progress__item-percent');
const lines = document.querySelectorAll('.progress__item-scale-color');

counters.forEach((el, i) => {
    lines[i].style.width = el.innerHTML
})