const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const displayResult = document.getElementById('result');
const button = document.getElementById('button');

const verifyingEmpty = () => {
  if (value1.value.trim() === '' || value2.value.trim() === '') {
    throw new Error('Os campos não podem estar vazios!')
  }
}

const verifyIsNumber = () => {
  if (isNaN(+value1.value) || isNaN(+value2.value)) {
    throw new Error('Os valores digitados devem ser numéricos');
  }
}

const showError = (error) => {
  displayResult.innerText = error;
  displayResult.style.color = 'red';
  displayResult.style.fontWeight = 'bold';
} 

const sum = () => {
    const result = +value1.value + +value2.value;
    displayResult.style = ''
    displayResult.innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
};

const clearFields = () => {
  value1.value = '';
  value2.value = '';
};

const verifyExceptions = () => {
  try {
    verifyIsNumber();
    verifyingEmpty();
    sum();
  } catch (error) {
    showError(error.message)
  } finally {
    clearFields();
  }
};


button.addEventListener('click', verifyExceptions);
