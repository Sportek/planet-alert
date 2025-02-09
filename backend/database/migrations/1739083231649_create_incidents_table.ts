import { BaseSchema } from '@adonisjs/lucid/schema'

export default class IncidentsSchema extends BaseSchema {
  protected tableName = 'incidents'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('latitude')
      table.float('longitude')
      table.string('description')
      table.timestamp('timestamp')
      table.string('type')

      // Clé étrangère vers users
      table.integer('user_id').unsigned().references('id').inTable('users')

      // Colonnes de timestamps
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}