const express = require('express');
const { authorization } = require('./authorization');
const routes = require('./routes');
const { PORT } = require('./constants');
const app = express();

app.use(express.json());

app.use(authorization);

app.use(routes);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
