const Router = require('express')
const router = new Router

router.post('/registration',) // регистрация пользователя
router.post('/login',)        // авторизация пользователя
router.get('/auth', (req, res) => {
    res.json({message: 'router: on'})
})          // проверка на авторизацию

module.exports = router