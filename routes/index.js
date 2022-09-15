const express = require('express')
// const Controller = require('../controllers/controller')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('tes routing pair projek')
})

module.exports = router