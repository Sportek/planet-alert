import Alert from '#models/incident'
import type { HttpContext } from '@adonisjs/core/http'

export default class FormsController {
  async submitForm({ request }: HttpContext) {
    const data = request.body()
    const alert = await Alert.create(data)
    return alert
  }
}
