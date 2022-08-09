const Router = require('express')
const router = new Router

router.use('/user')
router.use('/question')
router.use('/answer')
router.use('/type')

module.exports = router