const myText = document.querySelector('.center-content p');
const bgColor = document.getElementsByClassName('main-content')[0];
const bgColorCenter = document.querySelector('.main-content .center-content');
const fixH1 = document.getElementsByClassName('title')[0];
const upperCase = document.querySelectorAll('p')

console.log(upperCase);
myText.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium quo necessitatibus explicabo ipsa enim? Hic veritatis, vel saepe libero alias consectetur debitis minima voluptates modi inventore totam explicabo eveniet cumque.';

bgColor.style = 'background-color: rgb(76,164,109)';
bgColorCenter.style = 'background-color: white';
fixH1.innerText = 'Exercício 5.1 - JavaScript';

for (let index = 0; index < upperCase.length; index += 1) {
  upperCase[index].style = 'text-transform: uppercase';
}