import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async login({ request }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)

    return await User.accessTokens.create(user)
  }

  async me({ auth }: HttpContext) {
    return auth.authenticate()
  }

  async logout({ auth }: HttpContext) {
    const user = await auth.authenticate()
    await User.accessTokens.delete(user, user.currentAccessToken.identifier)
    return {
      message: 'Logged out successfully',
    }
  }

  async register({ request }: HttpContext) {
    const { email, password, fullName } = request.only(['email', 'password', 'fullName'])
    const user = await User.create({ email, password, fullName })
    return await User.accessTokens.create(user)
  }
}