'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FollowersFollowingSchema extends Schema {
  up () {
    this.create('followers_following', (table) => {
      table.increments('id').unsigned().notNullable().primary()
      table.integer('follower_id').unsigned()
      table.foreign('follower_id').references('id').inTable('users')
      table.integer('following_id').unsigned()
      table.foreign('following_id').references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('followers_following')
  }
}

module.exports = FollowersFollowingSchema
