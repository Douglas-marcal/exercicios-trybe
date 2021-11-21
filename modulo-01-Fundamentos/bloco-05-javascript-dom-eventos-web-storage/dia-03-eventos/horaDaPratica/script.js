function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// - 1

function addDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysUl = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = document.createElement('li');
    day.classList.add('day');
    day.innerText = dezDaysList[index];
    if (day.innerText.includes(24) || day.innerText.includes(25) || day.innerText.includes(31)) {
      day.classList.add('holiday');
    }
    if (day.innerText === '4' || day.innerText === '11' || day.innerText === '18' || day.innerText === '25') {
      day.classList.add('friday');
    }
    daysUl.appendChild(day);
  };
};

addDays();

// - 2
function createButton(feriados) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = feriados;
  buttonsContainer.appendChild(button);
}

createButton('Feriados');

// - 3
function highlightHolidays() {
  const holidays = document.querySelectorAll('.holiday');
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor !== 'rgb(165, 255, 241)') {
        holidays[index].style.backgroundColor = 'rgb(165, 255, 241)';
      } else {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      }
      // console.log(holidays[index].style.backgroundColor);
    }
}

const button = document.querySelector('#btn-holiday');
button.addEventListener('click', highlightHolidays);

// - 4
function createButtonFriday(day) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerText = day;
  buttonsContainer.appendChild(buttonFriday);
}

createButtonFriday('Sexta-feira');

// - 5
const buttonFriday = document.querySelector('#btn-friday');
buttonFriday.addEventListener('click', () => {
  const friday = document.querySelectorAll('.friday');
  let fridayDecember = [];
  for (let index = 4; index < 26; index += 7) {
    fridayDecember.push(index);
  }
  for (let index = 0; index < friday.length; index += 1) {
    if (friday[index].innerText !== 'Dia de Maldade!') {
      friday[index].innerText = 'Dia de Maldade!';
    } else {
      friday[index].innerText = fridayDecember[index];
    }
  }
});

// - 6
const days = document.querySelector('#days');
days.addEventListener('mouseover', (event) => {
  if (event.target.id !== 'days');
  event.target.style.fontSize = '30px';
  event.target.style.transition = '300ms'
});

days.addEventListener('mouseout', (event) => {
  if (event.target.id !== 'days');
  event.target.style.fontSize = '20px';
  event.target.style.transition = '300ms'
});

// - 7
const parentDiv = document.querySelector('.my-tasks');

function createTask(task) {
  const span = document.createElement('span');
  span.innerText += task;
  parentDiv.appendChild(span);
}

createTask('Cozinhar');

// - 8
function addColorTaks(color) {
  const div = document.createElement('div');
  div.classList.add('task');
  div.style.backgroundColor = color;
  parentDiv.appendChild(div);
}

addColorTaks('red')