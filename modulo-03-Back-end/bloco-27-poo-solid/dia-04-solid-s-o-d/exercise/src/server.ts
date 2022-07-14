import dotenv from 'dotenv';
import express from 'express';
import router from './router';

dotenv.config();

const app = express();

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
