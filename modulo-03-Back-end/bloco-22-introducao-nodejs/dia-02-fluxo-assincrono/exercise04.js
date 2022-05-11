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

async function removeCharacter10And6() {
  const fileContent = await fs.readFile(fileName, 'utf-8');
  const fileParsed = JSON.parse(fileContent);
  const idToRemove = [6, 10];
  const newContent = fileParsed.filter(({ id }) => !(idToRemove.includes(Number(id))));
  const fileStringify = JSON.stringify(newContent);
  await fs.writeFile(fileName, fileStringify);
}

async function createFileSimpsonFamily() {
  const fileContent = await fs.readFile(fileName, 'utf-8');
  const fileParsed = JSON.parse(fileContent);
  const newContent = fileParsed.slice(0, 4);
  const fileStringify = JSON.stringify(newContent);
  const fileSimpsonFamily = 'simpsonFamily.json';
  await fs.writeFile(fileSimpsonFamily, fileStringify);
}

async function addNewCharacter() {
  const newCharacter = { id: '5', name: 'Nelson Muntz'}
  const fileSimpsonFamily = 'simpsonFamily.json';
  const fileContent = await fs.readFile(fileSimpsonFamily, 'utf-8');
  const fileParsed = JSON.parse(fileContent);
  const newContent = [...fileParsed, newCharacter];
  const fileStringify = JSON.stringify(newContent);
  await fs.writeFile(fileSimpsonFamily, fileStringify);
}

// getCharacterFromId(10)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// readAndPrintFile();

// removeCharacter10And6();

// createFileSimpsonFamily();

// addNewCharacter();
