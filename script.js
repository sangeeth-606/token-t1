const jwt = require('jsonwebtoken');
const secretKey = '23jfjjifd9sdf';

const encrypt = (payload) => {
 
  return jwt.sign(payload, secretKey);
}

const decrypt = (token) => {
 
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    console.error('Invalid token');
    return null;
  }
}

module.exports = {
  encrypt,
  decrypt
}
