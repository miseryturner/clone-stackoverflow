const Router = require('express')
const router = new Router
const userRouter = require('./userRouter')
const questionRouter = require('./questionRouter')
const answerRouter = require('./answerRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/question', questionRouter)
router.use('/answer', answerRouter)
router.use('/type', typeRouter)

module.exports = router