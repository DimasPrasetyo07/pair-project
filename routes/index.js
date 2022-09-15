const express = require('express')
const ContHome = require('../controller/contHome')
const router = express.Router()
const userRoutes = require('./user')
const productRoutes = require('./product')

router.get('/', ContHome.home)
router.use('/user', userRoutes)
router.use('/product', productRoutes)


module.exports = router