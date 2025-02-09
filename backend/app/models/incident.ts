import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import User from './user.js'

export default class Incident extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare type: string

  @column()
  declare description: string

  @column()
  declare cause: string

  @column()
  declare image: string

  @column()
  declare location: string

  //API with location
  @column()
  declare weatherCondition: string

  @column()
  declare impact: string

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
