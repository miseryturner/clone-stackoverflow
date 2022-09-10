const Router = require('express')
const router = new Router
const AnswerController = require('../controllers/answerController')

router.get('/', AnswerController.getAll)  // получение всех ответов, на конкретный вопрос
router.post('/', AnswerController.create)      // добавление ответа под конкретный вопрос

module.exports = router