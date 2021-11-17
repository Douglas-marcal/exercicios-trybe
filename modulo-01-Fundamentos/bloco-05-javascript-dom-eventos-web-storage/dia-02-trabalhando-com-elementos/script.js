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
