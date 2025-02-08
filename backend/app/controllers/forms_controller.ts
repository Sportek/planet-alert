// import type { HttpContext } from '@adonisjs/core/http'

export default class FormsController {

    async submitForm({ request, response }: HttpContext) {

        
        // const data = request.only(['token'])
        // const validatedUserData = await VerifyEmailValidator.validate(data)
        // const jwtToken = jwt.verify(validatedUserData.token, process.env.JWT_SECRET as string) as {
        //   email: string
        //   verificationToken: string
        // }
        // const user = await User.findBy('email', jwtToken.email)
        // if (!user) return response.notFound({ message: 'User not found' })
        // if (user.verified) return response.badRequest({ message: 'Email already verified' })
        // if (user.verificationToken !== jwtToken.verificationToken)
        //   return response.badRequest({ message: 'Invalid verification token' })
        // if (user.verificationTokenExpires && user.verificationTokenExpires < DateTime.now())
        //   return response.badRequest({ message: 'Verification token expired' })
        // user.verificationToken = null
        // user.verified = true
        // user.verificationTokenExpires = null
        // await user.save()
        // return response.ok(user)
      }
}