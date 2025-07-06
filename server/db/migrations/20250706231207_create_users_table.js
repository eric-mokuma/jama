/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.string('email').notNullable().unique()
    table.string('nationality').notNullable()
    table.string('location').notNullable()
    table.text('interests') // comma-separated or JSON
    table.text('languages') // comma-separated or JSON
    table.text('badges') // comma-separated or JSON
    table.text('privacySettings') // JSON string
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
