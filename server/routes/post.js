const postingRoute = require('express').Router()
const { PostingController } = require('../controllers')
const { authentication } = require('../middleware/authorization')

postingRoute.get('/', PostingController.getPosting)
postingRoute.post('/create', authentication, PostingController.createPosting)
postingRoute.patch('/update/:id', authentication, PostingController.update)
postingRoute.delete('/delete/:id', authentication, PostingController.deletePosting)

module.exports = postingRoute