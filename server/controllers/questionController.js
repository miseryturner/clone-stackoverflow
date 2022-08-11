const {Question} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError =require('../error/apiError')

class QuestionController {
    async create(req, res, next) {
        try {
            const {title, text, userId, typeId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpeg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const question = await Question.create({title, text, userId, typeId, img: fileName})
    
            return res.json(question)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {

    }

    async getById(req, res) {

    }

    async edit(req, res) {

    }
}

module.exports = new QuestionController()