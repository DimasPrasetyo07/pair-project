const express = require('express')
const ContUser = require('../controller/contUser')
// const Controller = require('../controllers/controller')
const router = express.Router()

router.get('/', ContUser.readUser)
router.get('/add', ContUser.addUser)
router.post('/add', ContUser.handlerAddUser)





module.exports = router