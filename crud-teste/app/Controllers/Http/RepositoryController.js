'use strict'

const Repository = use('App/Models/Repository');

class RepositoryController {

    async get() {

        const repos = await Repository.all();

        return repos;

    }

    async index({ params }) {

        const repos = await Repository.find(params.id);

        return repos
    }


    async create({ request, auth }) {
        const data = request.only(['nome', 'description', 'public', 'slug'])
        const user = await auth.getUser();
        const repos = await Repository.create({...data, users_id: user.id});

        return repos;
    }

    async update({ params, request }) {

        const data = request.only(['nome', 'description', 'public', 'slug', 'id'])

        const repos = await Repository.find(params.id);

        if (repos) {
            repos.nome = data.nome;
            repos.description = data.description;
            repos.public = data.public;
            repos.slug = data.slug;

            await repos.save();
        }

        return repos;

    }

    async delete({ params }) {

        const repos = await Repository.find(params.id);

        if (repos)
            await repos.delete();

    }
    async star({ params, auth }) {

        const user = await auth.getUser();
        const repos = await Repository.find(params.id);

        await repos.stars().attach([user.id]);

        repos.save();

    }
    async unstar({ params, auth }) {

        const user = await auth.getUser();
        const repos = await Repository.find(params.id);

        await repos.stars().detach([user.id]);

        repos.save();
    }

}

module.exports = RepositoryController