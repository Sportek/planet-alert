import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Incident from './incident.js'

export default class Image extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare url: string

  @belongsTo(() => Incident)
  declare incident: BelongsTo<typeof Incident>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}