'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Follower extends Model {
    followers(){
        return this.belongsTo('App/Models/User')
    }
}

module.exports = Follower