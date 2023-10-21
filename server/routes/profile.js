const profileRoute = require('express').Router()
const { ProfileController } = require('../controllers')
const { authentication } = require('../middleware/authorization')

profileRoute.get('/', authentication, ProfileController.getExperience)
profileRoute.post('/add', authentication, ProfileController.add)
profileRoute.patch('/update/:id', authentication, ProfileController.update)
profileRoute.delete('/delete/:id', authentication, ProfileController.remove)

module.exports = profileRoute




