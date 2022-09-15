const express = require('express')
const ContUser = require('../controller/contUser')
// const Controller = require('../controllers/controller')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('landing page untuk /user')
  })
router.get('/add', ContUser.addUser)
router.post('/add', ContUser.handlerAddUser)




module.exports = router