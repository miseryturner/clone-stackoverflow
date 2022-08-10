const Router = require('express')
const router = new Router
const UserController = require('../controllers/userController')

router.post('/registration', UserController.registration)   // регистрация пользователя
router.post('/login', UserController.login)                 // авторизация пользователя
router.get('/auth', UserController.check)                   // проверка на авторизацию

module.exports = router