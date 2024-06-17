import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'stocks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
      table.string('reference').notNullable()
      table.integer('quantity')
      table.integer('seuil').notNullable()
      table.dateTime('reappro')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}