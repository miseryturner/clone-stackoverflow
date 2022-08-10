const Router = require('express')
const router = new Router
const AnswerController = require('../controllers/answerController')

router.get('/get-all-questions', AnswerController.getAll)  // получение всех ответов, на конкретный вопрос
router.get('/get-question', AnswerController.getById)      // получение одного ответа по id
router.post('/add-question', AnswerController.create)      // добавление ответа под конкретный вопрос

module.exports = router