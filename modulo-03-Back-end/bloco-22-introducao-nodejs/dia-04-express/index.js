const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3333;
const OK = 200;

app.use(bodyParser.json());

app.get('ping', (_, response) => {
  const message = { message: 'pong'}

  response.status(OK).json(message);
});

app.listen(PORT, `Server running on port ${PORT}`);
