const Router = require('express')
const router = new Router()
const autoRouter = require('./autoRouter')
const userRouter = require('./userRouter')
const markRouter = require('./markRouter')

router.use('/user', userRouter)
router.use('/mark', markRouter)
router.use('/auto', autoRouter)

module.exports = router
