'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RepositorySchema extends Schema {
  up () {
    this.create('repositories', (table) => {

      table.increments('id').unsigned().notNullable().primary()
      table.string('name', 80).notNullable()
      table.string('description', 60).nullable()
      table.boolean('public').notNullable().defaultTo(false)
      table.string('slug', 160).notNullable()
      table.integer('users_id').unsigned().notNullable()
      table.timestamps()

      table.foreign('users_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
    })
  }

  down () {
    this.drop('repositories')
  }
}

module.exports = RepositorySchema
