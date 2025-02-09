import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Image from './image.js'
import User from './user.js'

export default class Incident extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare latitude: number

  @column()
  declare longitude: number

  @column()
  declare description: string

  @column()
  declare timestamp: DateTime

  @column()
  declare type: string

  @column()
  declare userId: number

  @column()
  declare imageId: number

  @hasMany(() => Image)
  declare images: HasMany<typeof Image>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}