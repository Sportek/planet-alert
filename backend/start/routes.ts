/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')
const FormsController = () => import('#controllers/forms_controller')
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router
      .group(() => {
        router.get('/me', [AuthController, 'me'])
        router.delete('/logout', [AuthController, 'logout'])
        router.post('/register', [AuthController, 'register'])
        router.post('/login', [AuthController, 'login'])
      })
      .prefix('/auth')

    router
      .group(() => {
        router.post('/submitForm', [FormsController, 'submitForm'])
      })
      .prefix('/form')
  })
  .prefix('/api')
