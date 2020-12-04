'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersRepositorySchema extends Schema {
  up () {
    this.create('users_repositories', (table) => {
      table.increments('id').unsigned().notNullable().primary()
      table.integer('users_id').unsigned()
      table.foreign('users_id').references('id').inTable('users')
      table.integer('repositories_id').unsigned()
      table.foreign('repositories_id').references('id').inTable('repositories')
      table.timestamps()
    })
  }

  down () {
    this.drop('users_repositories')
  }
}

module.exports = UsersRepositorySchema
