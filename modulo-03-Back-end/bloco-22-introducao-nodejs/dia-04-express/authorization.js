const UNAUTHORIZED = 401;
const INTERNAL_SERVER_ERROR = 500;
const message = { message: 'Token inválido' };

function authorization(request, response, next) {
  try {
    const { authorization } = request.headers;
  
    if (!authorization || authorization.length !== 16) {
      return response.status(UNAUTHORIZED).json(message);
    }
  
    return next();
  } catch (error) {
    return response.status(INTERNAL_SERVER_ERROR).end();
  }
}

module.exports = { authorization };
