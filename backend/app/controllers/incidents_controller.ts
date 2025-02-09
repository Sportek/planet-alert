import Incident from '#models/incident'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class IncidentsController {

  async createIncident({ request, response, auth }: HttpContext) {
    const data = request.only(['latitude', 'longitude', 'description', 'type'])
    const timestamp = DateTime.now()
    const incident = await Incident.create({ ...data, timestamp })
    const user = await auth.getUserOrFail()
    await user.related('incidents').create(incident)
    return response.ok(incident)
  }

  async getIncidents({ response }: HttpContext) {
    const incidents = await Incident.query().preload('user')
    return response.ok(incidents)
  }

  async createManyIncidents({ request, response, auth }: HttpContext) {
    const data = request.only(['incidents'])
    const incidents = await Incident.createMany(data.incidents)
    const user = auth.getUserOrFail()
    await user.related('incidents').createMany(incidents)
    return response.ok(incidents)
  }
}