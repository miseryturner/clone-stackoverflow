const ApiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

class UserController {
    async registration(req, res, next) {
        let {email, password, role, name} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Не корректный email или password'))
        }

        const candidate = await User.findOne({where: { email }})
        if(candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword, role, name})
        const token = jwt.sign(
            {id: user.id, email, role, name},
            process.env.SECRET_KEY,
            {expiresIn: '24h'}
        )
        return res.json({token})
    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()