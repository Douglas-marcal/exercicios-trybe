const body = document.body;
// console.log(body);

const h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

const main = document.createElement('main');
main.className = 'main-content';
// main.classList.add('main-content');
body.appendChild(main)
