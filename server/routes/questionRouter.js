const Router = require('express')
const router = new Router
const QuestionController = require('../controllers/questionController')

router.get('/get-all-questions', QuestionController.getAll) // получение всех вопросов
router.get('/get-question', QuestionController.getById)       // получение одного вопроса
router.post('/add-question', QuestionController.create)      // создание вопроса
router.put('/edit-question', QuestionController.edit)      // изменение вопроса

module.exports = router