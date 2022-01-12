const url = 'https://api.coincap.io/v2/assets';
const secondURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
const container = document.querySelector('#coinsContainer');
const myRequest = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
}

const newFetch = async () => {
  const brl = await fetch(secondURL, myRequest)
  .then((response) => response.json())
  .then(({ usd: { brl }}) => brl);
  return brl;
};

const fetchAPI = () => {
  fetch(url, myRequest)
    .then((response) => response.json())
    .then(({ data }) => {
      const cryptoX = data.filter((element, index) => index < 10)
      cryptoX.forEach( async ({ name, symbol, priceUsd }) => {
        const createLI = document.createElement('li');
        const priceToNumber = +priceUsd * await newFetch();
        createLI.textContent = `${name} ${symbol}: R$ ${priceToNumber.toFixed(2)}`;
        container.appendChild(createLI);
      });

    })

};

fetchAPI()

