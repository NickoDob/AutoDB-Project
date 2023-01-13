const Router = require('express')
const router = new Router()
const markController = require('../controllers/markController')

router.post('/', markController.create)
router.get('/', markController.getAll)

module.exports = router
