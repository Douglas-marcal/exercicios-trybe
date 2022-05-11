const fs = require('fs/promises');

const fileName = 'simpsons.json';

function readAndPrintFile() {
  fs.readFile(fileName, 'utf-8')
    .then((fileContent) => {
      const fileParsed = JSON.parse(fileContent);
      const namesList = fileParsed.map(({id, name}) => `${id} - ${name}`);
      namesList.forEach((name) => console.log(name));
    });
}

function getCharacterFromId(id) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8')
      .then((fileContent) => {
        const fileParsed = JSON.parse(fileContent);
        const characterFound = fileParsed.find((character) => Number(character.id) === Number(id));
        if (characterFound) {
          resolve(characterFound)
        }

        reject('id não encontrado')
      })
  })
}

getCharacterFromId(10)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

readAndPrintFile();
