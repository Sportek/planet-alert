import Image from '#models/image'
import Incident from '#models/incident'
import type { HttpContext } from '@adonisjs/core/http'

export default class IncidentImagesController {

  async createIncidentImage({ request, response }: HttpContext) {
    const data = request.only(['url', 'incidentId'])
    const incidentImage = await Image.create(data)
    const incident = await Incident.find(data.incidentId)
    if (!incident) return response.notFound({ message: 'Incident not found' })
    await incident.related('images').create(incidentImage)
    return response.ok(incidentImage)
  }

  async getIncidentImages({ response }: HttpContext) {
    const incidentImages = await Image.all()
    return response.ok(incidentImages)
  }

  async getIncidentImagesByIncidentId({ params, response }: HttpContext) {
    const incidentImages = await Image.query().where('incident_id', params.incidentId)
    return response.ok(incidentImages)
  }

  async deleteIncidentImage({ params, response }: HttpContext) {
    const incidentImage = await Image.find(params.incidentImageId)
    if (!incidentImage) return response.notFound({ message: 'Incident image not found' })
    await incidentImage.delete()
    return response.ok({ message: 'Incident image deleted' })
  }
}