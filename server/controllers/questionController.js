const {Question, User, Type} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError =require('../error/apiError')

class QuestionController {
    async create(req, res, next) {
        try {
            let {title, text, userId, typeId} = req.body
            let {img} = req.files
            let fileName = uuid.v4() + '.jpeg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const question = await Question.create({title, text, userId, typeId, img: fileName})
    
            return res.json(question)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let { page, limit } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit

        const questions = await Question.findAndCountAll({ 
            limit, 
            offset,
            include: [
                {model: User},
                {model: Type}
            ]
        })

        return res.status(200).json(questions)
    }

    async getById(req, res, next ) {
        let { id } = req.params
        const question = await Question.findOne({
            where: { id },
            include: [
                {model: User},
                {model: Type}
            ]
        })
        if(!question) {
            return next(ApiError.notFound('Элемент не найден'))
        }
        return res.status(200).send(question)
    }

    async edit(req, res) {
        //TODO: доделать
    }
}

module.exports = new QuestionController()