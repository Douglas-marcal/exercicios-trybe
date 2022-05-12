const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3333;
const OK = 200;
const CREATED = 201;
const UNAUTHORIZED = 401;
const NOT_FOUND = 404;

app.use(bodyParser.json());

app.get('/ping', (_, response) => {
  const message = { message: 'pong'};

  response.status(OK).json(message);
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
