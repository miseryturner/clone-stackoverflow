const ApiError = require('../error/apiError')
const {Type} = require('../models/models')

class TypeController {
    async create(req, res, next) {
        try {
            const { title } = req.body
            if (!title) {
                return next(ApiError.badRequest('Не все поля заполнены'))
            }
            const type = await Type.create({title})
            return res.json(type)
        } catch (e) {
            return next(ApiError.badRequest('Тип с таким названием уже существет'))
        }
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()