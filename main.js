const pulsanteApri = document.querySelector('.fas.fa-bars');
const pulsanteChiudi = document.querySelector('.fas.fa-times');
const elemento = document.querySelector('.hamburger-menu');

pulsanteApri.addEventListener("click", function() {
    elemento.className += ' active';
});

pulsanteChiudi.addEventListener("click", function() {
    elemento.classList.remove('active');
});