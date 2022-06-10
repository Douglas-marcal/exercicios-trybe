require('dotenv').config();
const express = require('express');
const route = require('./src/controller/employees');

const app = express();

app.use(express.json());

app.use(route)

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
