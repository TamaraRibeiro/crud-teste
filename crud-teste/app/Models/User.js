'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {

  static boot() {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */

  // tokens () {
  //   return this.hasMany('App/Models/Token')
  // }

  repositories() {
    return this.hasMany('App/Models/Repository', 'id', 'users_id')
  }


  followers() {
    return this.belongsToMany('App/Models/User', 'following_id', 'follower_id').pivotTable('followers_following')
  }

  following() {
    return this.belongsToMany('App/Models/User', 'follower_id', 'following_id').pivotTable('followers_following');
  }

  stars() {
    return this.belongsToMany('App/Models/Repository', 'users_id', 'repositories_id').pivotTable('users_repositories')
  }

}

module.exports = User
