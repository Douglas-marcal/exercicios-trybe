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
    const createOption = document.createElement('option')
    createOption.setAttribute('value', state)
    createOption.textContent = brazil[state]
    selectStates.appendChild(createOption)
  }
}

addOptionOnScreen()

new window.JustValidate('.teste-funciona', {
  rules: {
    'full-name': {
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    email: {
      required: true,

    }
  },
  messages: {
    'full-name': {
      required: 'Campo obrigatório.',
      minLength: 'Mínimo 3 caracteres.',
      maxLength: 'Máximo 40 caracteres'
    },
    email: {
      required: 'Campo obrigatório',
      
    },
  },
  submitHandler: (form, values) => {
    console.log(form, values)
  }
});
