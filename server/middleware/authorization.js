const { verifyToken } = require('../helper/jwt')

module.exports.authentication = async (req, res, next) => {
    try {
        const token = req.headers.access_token
        if (!token) return res.status(401).json({ message: 'Unauthorized' })
        const decode = verifyToken(token)
        req.userData = decode
        next()
    } catch (e) {
        res.status(403).json({ message: 'Access Forbidden' })
    }
}