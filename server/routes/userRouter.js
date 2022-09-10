const Router = require('express')
const router = new Router
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', UserController.registration)   // регистрация пользователя
router.post('/login', UserController.login)                 // авторизация пользователя
router.get('/auth', authMiddleware, UserController.check)                   // проверка на авторизацию

module.exports = router