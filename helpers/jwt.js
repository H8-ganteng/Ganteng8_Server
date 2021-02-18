var jwt = require('jsonwebtoken');

function generateToken() {
    return jwt.sign({ foo: 'bar' }, 'shhhhh');
}

function verify() {
    return jwt.verify(token, 'shhhhh');
}

module.exports = {
    generateToken,
    verify
}