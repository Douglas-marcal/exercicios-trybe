const MESSAGE_INVALID_TOKEN = require('./constants');
const { UNAUTHORIZED, INTERNAL_SERVER_ERROR } = require('./constants/statusCode');

function authorization(request, response, next) {
  try {
    const { authorization } = request.headers;
  
    if (!authorization || authorization.length !== 16) {
      return response.status(UNAUTHORIZED).json(MESSAGE_INVALID_TOKEN);
    }
  
    return next();
  } catch (error) {
    return response.status(INTERNAL_SERVER_ERROR).end();
  }
}

module.exports = { authorization };
