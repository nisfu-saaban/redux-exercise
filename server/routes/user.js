const userRoute = require('express').Router()
const { UserController } = require('../controllers')
const { authentication } = require('../middleware/authorization')

userRoute.get('/', authentication, UserController.getUsers)
userRoute.post('/login', UserController.login)
userRoute.post('/register', UserController.register)
userRoute.patch('/update', authentication, UserController.updateUser)
userRoute.delete('/delete', authentication, UserController.removeUser)

module.exports = userRoute