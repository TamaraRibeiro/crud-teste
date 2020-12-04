'use strict'

const User = use('App/Models/User');

class UserController {

    async get(){

        const users = await User.all();

        return users;
    }

    async index({ params }){

        const users = await User.find(params.id);

        return users;
    }

    async create({ request }){

        const data = request.only(['name', 'email', 'location', 'avatar', 'username', 'bio'])

        const users = await User.create(data);

        return users;
    }

    async update({ params, request }){

        const data = request.only(['nome', 'email', 'location', 'avatar', 'username', 'bio'])

        const users = await User.find(params.id);

        if(users){
            users.nome = data.nome;
            users.email = data.email;
            users.location = data.location;
            users.avatar = data.avatar;
            users.username = data.username;
            users.bio = data.bio;

            await users.save();
        }

        return users;

    }

    async delete({ params }){

        const users = await User.find(params.id);

        if(users)
            await users.delete();

    }

    async follow({ params }){
        const user = await auth.getUser();
        const user1 = await User.find(params.id);

        await user.following().attach([user1.id]);

        user.save();

    }

    async unfollow({ params, auth }){
        const user = await auth.getUser();
        const user1 = await User.find(params.id);

        await user.following().detach([user1.id]);

        user.save();

    }

    async repositories({ params }){

        const users = await User.find(params.id);

        const repos = await users.repositories().fetch();

        return repos;
    }

    async followers({ params }){

        const users = await User.find(params.id);

        const followers = await users.followers().fetch();

        return followers;
    }
}

module.exports = UserController