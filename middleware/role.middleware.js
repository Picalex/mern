const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {

        const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"

        if (!token) {
            return res.status(401).json({ message: 'Нет авторизации' })
        }

        const decoded = jwt.verify(token, config.get('jwtSecret'))
       if ( decoded.role === 'Admin' || decoded.role === 'SuperAdmin'){
            next()
       } else {
           return res.status(401).json({ message: 'нет доступа' })
       }

    } catch (e) {
        res.status(401).json({ message: 'Нет авторизации' })
    }
}
