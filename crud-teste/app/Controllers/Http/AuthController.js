'use strict'

const User = use('App/Models/User'); //use: para requisitar no adonis

class AuthController {
    async authenticate({ request, auth }){
        const { id } = request.all();

        const user = await User.find(id)

        return await auth.generate(user)
    }
}

module.exports = AuthController
