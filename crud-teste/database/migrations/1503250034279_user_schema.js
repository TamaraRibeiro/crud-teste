'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {

      table.increments('id').unsigned().notNullable().primary()
      table.string('name', 80).notNullable()
      table.string('username', 60).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('location', 60).nullable()
      table.string('avatar', 256).nullable()
      table.string('bio', 256).nullable()
      table.timestamps()

    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
