const PORT = 3333;

const SIMPSONS_FILE = 'simpsons.json';
const MESSAGE_NOT_FOUND = { message: 'simpson not found' };
const MESSAGE_CONFLICT = { message: 'id already exists' };
const MESSAGE_INVALID_TOKEN = { message: 'Token inválido' };
const MESSAGE_MISSING_FIELDS = { message: 'missing fields' };

module.exports = {
  PORT,
  SIMPSONS_FILE,
  MESSAGE_CONFLICT,
  MESSAGE_NOT_FOUND,
  MESSAGE_INVALID_TOKEN,
  MESSAGE_MISSING_FIELDS,
};
