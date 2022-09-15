const {Product, Profile, User} = require("../models")

class ContUser {
    static addUser(request, response) {
        // response.send('uji coba add user')
        response.render('formAdduser')
    }
    static handlerAddUser(request, response) {
        response.send('tes tes')
        // console.log(request.body)
        // const {username, email, password, name, phone, nik} = request.body
    }
    static readUser(request, response) {
        // response.send('tes tes userlist')
        Profile.findAll({
            include: {
                model: User
            }
        })
        .then(result => {
            // response.send(result)
            response.render('userList', {result})
        })
        .catch(err => {
            response.send(err)
        }) 
    }

    
}


module.exports = ContUser