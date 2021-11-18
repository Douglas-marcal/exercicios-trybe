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
let orderedNumbers = [
  'Um',
  'Dois',
  'Três',
  'Quatro',
  'Cinco',
  'Seis',
  'Sete',
  'Oito',
  'Nove',
  'Dez'
]

const ul = document.createElement('ul');
section3.appendChild(ul)

for (let index = 0; index < orderedNumbers.length; index += 1) {
  const li = document.createElement('li');
  li.innerText = orderedNumbers[index];
  ul.appendChild(li)
}

// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');
// const li4 = document.createElement('li');
// const li5 = document.createElement('li');
// const li6 = document.createElement('li');
// const li7 = document.createElement('li');
// const li8 = document.createElement('li');
// const li9 = document.createElement('li');
// const li10 = document.createElement('li');

// section3.appendChild(ul);
// ul.appendChild(li1);
// li1.innerText = 'Um';
// ul.appendChild(li2);
// li2.innerText = 'Dois';
// ul.appendChild(li3);
// li3.innerText = 'Três';
// ul.appendChild(li4);
// li4.innerText = 'Quatro';
// ul.appendChild(li5);
// li5.innerText = 'Cinco';
// ul.appendChild(li6);
// li6.innerText = 'Seis';
// ul.appendChild(li7);
// li7.innerText = 'Sete';
// ul.appendChild(li8);
// li8.innerText = 'Oito';
// ul.appendChild(li9);
// li9.innerText = 'Nove';
// ul.appendChild(li10);
// li10.innerText = 'Dez';

// - 9
const firstH3 = document.createElement('h3');
const secondH3 = document.createElement('h3');
const thirdH3 = document.createElement('h3');
main.appendChild(firstH3);
main.appendChild(secondH3);
main.appendChild(thirdH3);

// --------------------------------------------------//
- 1
h1.classList.add('title');

// - 2
firstH3.classList.add('description');
secondH3.classList.add('description');
thirdH3.classList.add('description');

// - 3
let paiSection = document.querySelector('.left-content').parentNode;
paiSection.removeChild(section2);

// - 4
section3.style = 'margin-right: auto';

// - 5
let greenColor = document.querySelector('.center-content');
greenColor.style = 'background-color: green';

// - 6
let deleteItems = document.querySelectorAll('li');

for (let index = 0; index < deleteItems.length; index += 1) {
  if (deleteItems[index].innerText === 'Nove' || deleteItems[index].innerText === 'Dez') {
    ul.removeChild(deleteItems[index]);
  }
}

// const deleteItems = document.getElementsByTagName('li');
// console.log(deleteItems);

// for (let index = 0; index < deleteItems.length; index += 1) {
//   if (deleteItems[index].innerText === 'Nove' || deleteItems[index].innerText === 'Dez') {
//     deleteItems[index].remove();
//   }
// }
