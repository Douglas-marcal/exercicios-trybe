require('dotenv').config();
const app = require('express')();

app.use(express.json());

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
