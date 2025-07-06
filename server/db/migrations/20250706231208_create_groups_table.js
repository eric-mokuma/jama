/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('groups', function (table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.text('description')
    table.string('city').notNullable()
    table.string('country').notNullable()
    table.string('type').notNullable() // cultural, professional, hobby
    table.text('members') // comma-separated user IDs or JSON
    table.text('admins') // comma-separated user IDs or JSON
    table.text('events') // comma-separated event IDs or JSON
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('groups')
}
