const jwt = require('jsonwebtoken')
const config = require('config')


module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }
    const a=[]
    try {

        const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"

        if (!token) {
            return res.status(401).json({ message: 'Нет авторизации' })
        }
        const decoded = jwt.verify(token, config.get('jwtSecret'))
         //decoded.roles.map((roles)=>{console.log(roles._id)})
        //decoded.userRoles.map((role)=>{console.log(role)})
        const name=[]
        function Nameless(decoded,name) {
            decoded.roles.map((roles,index)=>{
                decoded.userRoles.map((UserRoles)=>{
                    if(roles._id===UserRoles){
                        name[index]=roles.roleName
                    }
                })
            })
        }
        Nameless(decoded,name)
       if (a){
           console.log(name)
            next()
       } else {
           return res.status(401).json({ message: 'нет доступа' })
       }

    } catch (e) {
        res.status(401).json({ message: 'Нет авторизации' })
    }
}
