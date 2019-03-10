const selector= selector => document.querySelector(selector);
const selectorAll= selector => document.querySelectorAll(selector);

const hamburguer = selector('.menu-hamburguer');
const hamburguerNav= selector('.nav-menu-hamburguer');

hamburguer.onclick= function() {
    hamburguer.classList.toggle('ativo');
    hamburguerNav.classList.toggle('visible');
}

const selector= selector => document.querySelector(selector);
const selectorAll= selector => document.querySelectorAll(selector);

const cadastrar = selector('.botao');

cadastrar.onclick = function(){
    cadastrar.classList.toggle('ativo');
}

const selector= selector => document.querySelector(selector);
const selectorAll= selector => document.querySelectorAll(selector);

const div= selector('.emp-flex');

empresa.onclick=function(){
    empresa.classList.toggle('ativo');
}
