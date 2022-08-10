const Router = require('express')
const router = new Router

router.get('/get-all-questions',) // получение всех ответов, на конкретный вопрос
router.get('/get-question')       // получение одного ответа по id
router.post('/add-question')      // добавление ответа под конкретный вопрос

module.exports = router