const url = 'https://api.coincap.io/v2/assets';
const container = document.querySelector('#coinsContainer')

const fetchAPI = () => {
  const myRequest = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }

  fetch(url, myRequest)
    .then((response) => response.json())
    .then(({ data }) => {
      const cryptoX = data.filter((element, index) => index < 10)
      cryptoX.forEach(({ name, symbol, priceUsd }) => {
        const createLI = document.createElement('li');
        const priceToNumber = +priceUsd;
        createLI.textContent = `${name} ${symbol}: $ ${priceToNumber.toFixed(2)}`;
        container.appendChild(createLI);
      });

    })

};

fetchAPI()
