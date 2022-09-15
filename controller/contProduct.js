
const convertToRupiah = require("../helper/convertRupiah")
const {Product, Profile, User, Transaction} = require("../models")
const {Op} = require('sequelize')


class ContProduct {
    static productList (request, response) {
        // response.send('uji coba ruting yg dikirim dari controler')
        const {search} = request.query
        let option = {}
        if (search) {
            option.where = {
          name: {[Op.iLike]: `%${search}%`}
        }
        }
        Product.findAll(option)
        .then(result => {
            response.render('productList', {result, convertToRupiah})
            // response.send(result)
        })
        .catch(err => {
            response.send(err)
        })

        // Product.findAll()
        // .then(result => {
        //     response.render('productList', {result, convertToRupiah})
        //     // response.send(result)
        // })
        // .catch(err => {
        //     response.send(err)
        // })
    }



    static productDetail (request, response) {
        // response.send('uji coba')
        // console.log(request.params)
        let {id} = request.params
        Product.findByPk(id)
        .then(result => {
            // response.send(result)
            response.render('productDetail', {result, convertToRupiah})
        })
        .catch(err => {
            response.send(err)
        })
    }
    static buyProduct (request, response) {
        // response.send('beli berhasil')
        console.log(request.params, '<<<<<<<<<<<')
        const {id} = request.params
        Product.decrement('stock', {where: {
            "id" : id
        }})
        .then(() => {
            return Transaction.create({UserId: 2, ProductId: id})
            
        })
        .then(result => {
            response.redirect(`/product/${id}/detail`)
        })
        .catch(err => {
            console.log(err, '<<<<<<<<<<<<<')
            response.send(err)
        })
    }
    static addProduct(request, response) {
        response.render('formAddProduct')
    }
    static handlerAddProduct (request, response) {
        // console.log(request.body)
        let {name, description, price, stock} = request.body
        Product.create({
            name,
            description,
            price,
            stock 
        })
        .then (result => {
            response.redirect('/product')
        })
        .catch (err => {
            if (err.name === 'SequelizeValidationError') {
                let errors = err.errors.map(el => {
                    return el.message
                })
                response.send(errors)
            } else {
                response.send(err)
            }
        })
    }
    static deleteProduct (request, response) {
        let {id} = request.params
        Product.destroy({
            where: {
                "id": id
            }
        })
        .then(result => {
            response.redirect('/product')
        })
        .catch(err => {
            response.send(err)
        }) 
    }


}

module.exports = ContProduct