const buttonIncrease = document.querySelector('.increase');
const buttonDecrease = document.querySelector('.decrease');
const counterDisplay = document.querySelector('.counter');

buttonIncrease.addEventListener('click', () => {
  let counter = Number(counterDisplay.textContent)
  counterDisplay.textContent = counter + 1
})

buttonDecrease.addEventListener('click', () => {
  let counter = Number(counterDisplay.textContent)
  counterDisplay.textContent = counter - 1
})
