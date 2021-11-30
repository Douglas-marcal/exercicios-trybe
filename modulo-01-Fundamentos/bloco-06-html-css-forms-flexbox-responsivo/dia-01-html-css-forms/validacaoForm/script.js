const buttonSubmit = document.querySelector('#button-submit');
const allInput = document.querySelectorAll('input');
const inputDate = document.querySelector('#input-date');

const brazil = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins',
}

function addOptionOnScreen() {
  const selectStates = document.querySelector('#select-states');
  for (let state in brazil) {
    // console.log(brazil[state]);s
    const createOption = document.createElement('option')
    createOption.setAttribute('value', state)
    createOption.textContent = brazil[state]
    selectStates.appendChild(createOption)
  }
}

addOptionOnScreen();

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  console.log(allInput);
    for (let index = 0; index < allInput.length; index += 1) {
        if (allInput[index].value.trim() === '') {
          allInput[index].style.border = 'red'
          alert('Preencha os campos obrigatórios!');
          allInput[index].value = ''
          break;
      }
    }
})
