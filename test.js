const jwt = require('jsonwebtoken')

const Configs = require('./dist/infra/configs')

console.log(Configs.default.secret)

let payload = {
    iss: 'google.com',
    iat: new Date().getSeconds(),
    exp: new Date().setMinutes(5),
    username: 'TiagoMendes',
    email: 'tetigo@gmail.com'
}
let token = jwt.sign(payload, Configs.default.secret)

console.log(token)

let decoded = jwt.verify(token, Configs.default.secret)

console.log(decoded)

const today = new Date()
const now = ''+today.getFullYear()+today.getMonth()+today.getDate()+today.getHours()+today.getMinutes()+today.getSeconds()
console.log(now)