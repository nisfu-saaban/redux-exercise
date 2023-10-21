const bcrypt = require('bcrypt')
const SALT = 10

module.exports.encrypt = password => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hashPWD = bcrypt.hashSync(String(password), salt)
        return hashPWD
    } catch (e) {
        return e
    }

}

module.exports.decrypt = (password, hashPWD) => {
    try {
        const match = bcrypt.compareSync(String(password), hashPWD)
        return match
    } catch (e) {
        return e
    }

}