const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const displayResult = document.getElementById('result');
const button = document.getElementById('button');

const verifyingEmpty = () => {
  if (value1.value === '' || value2.value === '') {
    throw new Error('Os campos não podem estar vazios!')
  }
}

const showError = (error) => {
  displayResult.innerText = error;
  displayResult.style.color = 'red';
  displayResult.style.fontWeight = 'bold';
} 

const sum = () => {
    const result = Number(value1.value) + Number(value2.value);
    displayResult.innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
};

const verifyExceptions = () => {
  try {
    verifyingEmpty();
    sum();
  } catch (error) {
    showError(error.message)
  }
};


button.addEventListener('click', verifyExceptions);
