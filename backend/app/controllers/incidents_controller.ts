import Incident from '#models/incident'
import type { HttpContext } from '@adonisjs/core/http'

export default class IncidentsController {

  async createIncident({ request, response }: HttpContext) {
    const data = request.only(['latitude', 'longitude', 'description', 'timestamp'])
    const incident = await Incident.create(data)
    return response.ok(incident)
  }

  async getIncidents({ response }: HttpContext) {
    const incidents = await Incident.all()
    return response.ok(incidents)
  }
}