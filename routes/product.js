const express = require('express')
const ContProduct = require('../controller/contProduct')
const router = express.Router()


router.get('/', ContProduct.productList)
router.get('/add', ContProduct.addProduct)
router.post('/add', ContProduct.handlerAddProduct)
router.get('/:id/detail', ContProduct.productDetail)
router.get('/:id/buy', ContProduct.buyProduct)
router.get('/:id/delete', ContProduct.deleteProduct)


module.exports = router