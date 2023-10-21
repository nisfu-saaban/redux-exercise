const route = require('express').Router()

route.get('/api', (req, res) => {
    res.status(200).json({ message: 'Welcome to Api' })
})

const userRoutes = require('./user.js')
const postingRoutes = require('./post.js')
const profileRoutes = require('./profile.js')

route.use('/api/users', userRoutes)
route.use('/api/postings', postingRoutes)
route.use('/api/profile', profileRoutes)

module.exports = route