import Incident from '#models/incident'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class IncidentsController {

  async createIncident({ request, response }: HttpContext) {
    const data = request.only(['latitude', 'longitude', 'description', 'type'])
    const timestamp = DateTime.now()
    const incident = await Incident.create({ ...data, timestamp })
    return response.ok(incident)
  }

  async getIncidents({ response }: HttpContext) {
    const incidents = await Incident.all()
    return response.ok(incidents)
  }
}