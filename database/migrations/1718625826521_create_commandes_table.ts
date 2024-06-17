import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'commandes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
      table.string('numero_commande').notNullable()
      table.string('articles').notNullable()
      table.float('price').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}