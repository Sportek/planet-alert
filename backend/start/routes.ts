/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'

router.group(() => {
  router.group(() => {
    router.get('/me', [AuthController, 'me'])
    router.delete('/logout', [AuthController, 'logout'])
    router.post('/register', [AuthController, 'register'])
    router.post('/login', [AuthController, 'login'])
  }).prefix('/auth')
}).prefix('/api')
