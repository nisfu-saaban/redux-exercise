require('dotenv').config()
const jwt = require('jsonwebtoken')
const token_secret = process.env.TOKEN_SECRET

module.exports.generateToken = data => {
    const token = jwt.sign(data, token_secret)
    return token
}

module.exports.verifyToken = token => {
    const decode = jwt.verify(token, token_secret)
    return decode
}