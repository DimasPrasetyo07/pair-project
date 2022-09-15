const express = require('express')
const ContHome = require('../controller/contHome')
const router = express.Router()
const userRoutes = require('./user')

router.get('/', ContHome.home)
router.use('/user', userRoutes)


module.exports = router