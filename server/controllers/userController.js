const ApiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateToken = (id, email, role, name) => {
    return jwt.sign(
        {id: id, email, role, name},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        let {email, password, name} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Не корректный email или password'))
        }

        const candidate = await User.findOne({where: { email }})
        if(candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword, name})
        const token = generateToken(user.id, user.email, user.role, user.name)
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user) {
            return next(ApiError.internal('Пользователь с таким email не найден'))
        }
        
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return next(ApiError.internal('Не верный пароль'))
        }

        const token = generateToken(user.id, user.email, user.role, user.name);
        return res.json({token})
    }

    async check(req, res, next) {
         const token = generateToken(req.user.id, req.user.email, req.user.role, req.user.name)
         res.json({token})
    }
}

module.exports = new UserController()