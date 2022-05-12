const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3333;
const OK = 200;
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

app.all('*', (request, response) => {
  const { path } = request;
  const message = { message: `${path} does'nt exists`};

  response.status(NOT_FOUND).json(message);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
