import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ImagesSchema extends BaseSchema {
  protected tableName = 'images'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // Colonne pour l'URL de l'image
      table.string('url').notNullable()

      // Clé étrangère vers incidents
      table.integer('incident_id').unsigned().references('id').inTable('incidents').onDelete('CASCADE')

      // Colonnes de timestamps
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}