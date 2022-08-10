const Router = require('express')
const router = new Router

router.get('/get-all-questions',) // получение всех вопросов
router.get('/get-question')       // получение одного вопроса
router.post('/add-question')      // создание вопроса
router.put('/edit-question')

module.exports = router