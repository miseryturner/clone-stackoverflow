const { Answer, User } = require('../models/models')

class AnswerController {
    async getAll(req, res, next) {
        const { questionId } = req.query;

        const answers = await Answer.findAll({
            where: { questionId },
            include: [
                {model: User}
            ]
        })
        
        return res.status(200).send(answers)
    }

    async create(req, res) {
        try {
            let { text, userId, questionId } = req.body
    
            const answer = await Answer.create({ text, userId, questionId })
    
            return res.json(answer)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new AnswerController()