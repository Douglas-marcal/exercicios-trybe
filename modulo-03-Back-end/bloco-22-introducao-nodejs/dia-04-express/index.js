const express = require('express');
const bodyParser = require('body-parser');
const { getFileContent, addFileContent } = require('./utils');
const app = express();

const PORT = 3333;
const OK = 200;
const CREATED = 201;
const NO_CONTENT = 204;
const UNAUTHORIZED = 401;
const NOT_FOUND = 404;
const CONFLICT = 409;
const INTERNAL_SERVER_ERROR = 500;
const SIMPSONS_FILE = 'simpsons.json';
const MESSAGE_NOT_FOUND = { message: 'simpson not found' };
const MESSAGE_CONFLICT = { message: 'id already exists' };

app.use(bodyParser.json());

app.get('/ping', (_, response) => {
  const message = { message: 'pong'};

  response.status(OK).json(message);
});

app.get('/simpsons', async (_, response) => {
  try {
    const fileContent = await getFileContent(SIMPSONS_FILE);

    return response.status(OK).json(fileContent);
  } catch (error) {
    return response.status(INTERNAL_SERVER_ERROR).end();
  }
});

app.get('/simpsons/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const fileContent = await getFileContent(SIMPSONS_FILE);

    const characterFound = fileContent.find((character) => Number(character.id) === Number(id));

    if (!characterFound) return response.status(NOT_FOUND).json(MESSAGE_NOT_FOUND);

    return response.status(OK).json(characterFound);
  } catch (error) {
    return response.status(INTERNAL_SERVER_ERROR).end();
  }
});

app.post('/hello', (request, response) => {
  const { name } = request.body;

  const message = { message: `Hello, ${name}` };

  response.status(OK).json(message);
});

app.post('/greetings', (request, response) => {
  const { name, age } = request.body;
  const messageUnauthorized = { message: 'Unauthorized' };
  const messageAuthorized = { message: `Hello, ${name}!` };

  if (age < 18) return response.status(UNAUTHORIZED).json(messageUnauthorized);

  response.status(OK).json(messageAuthorized)
});

app.post('/simpsons', async (request, response) => {
  try {
    const { id, name } = request.body;
    const characterToAdd = {
      id,
      name,
    };

    const fileContent = await getFileContent(SIMPSONS_FILE);

    const isAlreadyExists = fileContent.find((character) => Number(character.id) === Number(id));

    if (isAlreadyExists) return response.status(CONFLICT).json(MESSAGE_CONFLICT);

    const newContent = [...fileContent, characterToAdd];

    await addFileContent(SIMPSONS_FILE, newContent);

    return response.status(NO_CONTENT).end();
  } catch (error) {
    return response.status(INTERNAL_SERVER_ERROR).end();
  }
});

app.put('/users/:name/:age', (request, response) => {
  const { name, age } = request.params;

  const message = { message: `Seu nome é ${name} e você tem ${age} anos de idade` };

  response.status(CREATED).json(message);
});

app.all('*', (request, response) => {
  const { path } = request;
  const message = { message: `${path} does'nt exists`};

  response.status(NOT_FOUND).json(message);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
