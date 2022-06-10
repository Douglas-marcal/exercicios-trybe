const express = require('express');
const { getFileContent, addFileContent } = require('../utils');
const routes = express.Router();

const {
  OK,
  CREATED,
  NOT_FOUND,
  NO_CONTENT,
  UNAUTHORIZED,
  CONFLICT,
  INTERNAL_SERVER_ERROR,
} = require('../constants/statusCode');
const {
  MESSAGE_CONFLICT,
  MESSAGE_NOT_FOUND,
  SIMPSONS_FILE,
  MESSAGE_MISSING_FIELDS,
} = require('../constants');
const { tokenGenerator } = require('../tokenGenerator');

routes.get('/ping', (_, response) => {
  const message = { message: 'pong'};

  response.status(OK).json(message);
});

routes.get('/simpsons', async (_, response) => {
  try {
    const fileContent = await getFileContent(SIMPSONS_FILE);

    return response.status(OK).json(fileContent);
  } catch (error) {
    return response.status(INTERNAL_SERVER_ERROR).end();
  }
});

routes.get('/simpsons/:id', async (request, response) => {
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

routes.post('/hello', (request, response) => {
  const { name } = request.body;

  const message = { message: `Hello, ${name}` };

  response.status(OK).json(message);
});

routes.post('/greetings', (request, response) => {
  const { name, age } = request.body;
  const messageUnauthorized = { message: 'Unauthorized' };
  const messageAuthorized = { message: `Hello, ${name}!` };

  if (age < 18) return response.status(UNAUTHORIZED).json(messageUnauthorized);

  response.status(OK).json(messageAuthorized)
});

routes.post('/simpsons', async (request, response) => {
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

routes.post('/signup', (request, response) => {
  const { email, password, firstName, phone } = request.body;

  if (!email || !password || !firstName || !phone) {
    return response.status(UNAUTHORIZED).json(MESSAGE_MISSING_FIELDS);
  }

  const token = tokenGenerator();

  response.status(OK).json({token});
});

routes.put('/users/:name/:age', (request, response) => {
  const { name, age } = request.params;

  const message = { message: `Seu nome é ${name} e você tem ${age} anos de idade` };

  response.status(CREATED).json(message);
});

routes.all('*', (request, response) => {
  const { path } = request;
  const message = { message: `${path} does'nt exists`};

  response.status(NOT_FOUND).json(message);
});

module.exports = routes;