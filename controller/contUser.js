class ContUser {
    static addUser(request, response) {
        // response.send('uji coba add user')
        response.render('formAdduser')
    }
    static handlerAddUser(request, response) {
        // console.log(request.body)
        const {username, email, password, name, phone, nik} = request.body
        
    }
}


module.exports = ContUser