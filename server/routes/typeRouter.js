const Router = require('express')
const router = new Router
const TypeController = require('../controllers/typeController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('ADMIN'), TypeController.create) // создание типа
router.get('/', TypeController.getAll)   // получение всех типов

module.exports = router