// - 1
const body = document.body;
// console.log(body);

const h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

// - 2
const main = document.createElement('main');
main.className = 'main-content';
// main.classList.add('main-content');
body.appendChild(main);

// - 3
const section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

// - 4
const p = document.createElement('p');
p.innerText = 'Lorem ipsum indolor, same slatuto.';
section.appendChild(p);

// - 5
const section2 = document.createElement('section');
section2.classList.add('left-content');
main.appendChild(section2);

// - 6
const section3 = document.createElement('section');
section3.className = 'right-content';
main.appendChild(section3);

// - 7
const img = document.createElement('img');
img.classList.add('small-image');
img.src = 'https://picsum.photos/200';
img.alt = 'Fotos aleatórias';
section2.appendChild(img);

// - 8
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li');
const li7 = document.createElement('li');
const li8 = document.createElement('li');
const li9 = document.createElement('li');
const li10 = document.createElement('li');

section3.appendChild(ul);
ul.appendChild(li1);
li1.innerText = 'Um';
ul.appendChild(li2);
li2.innerText = 'Dois';
ul.appendChild(li3);
li3.innerText = 'Três';
ul.appendChild(li4);
li4.innerText = 'Quatro';
ul.appendChild(li5);
li5.innerText = 'Cinco';
ul.appendChild(li6);
li6.innerText = 'Seis';
ul.appendChild(li7);
li7.innerText = 'Sete';
ul.appendChild(li8);
li8.innerText = 'Oito';
ul.appendChild(li9);
li9.innerText = 'Nove';
ul.appendChild(li10);
li10.innerText = 'Dez';

// - 9
const firstH3 = document.createElement('h3');
const secondH3 = document.createElement('h3');
const thirdH3 = document.createElement('h3');
main.appendChild(firstH3);
main.appendChild(secondH3);
main.appendChild(thirdH3);
