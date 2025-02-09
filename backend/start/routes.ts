/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import IncidentImagesController from '#controllers/incident_images_controller'
import IncidentsController from '#controllers/incidents_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.group(() => {
  router.group(() => {
    router.get('/me', [AuthController, 'me'])
    router.delete('/logout', [AuthController, 'logout'])
    router.post('/register', [AuthController, 'register'])
    router.post('/login', [AuthController, 'login'])
  }).prefix('/auth')

  router.group(() => {
    router.post('/', [IncidentsController, 'createIncident'])
    router.get('/', [IncidentsController, 'getIncidents'])
    router.post('/many', [IncidentsController, 'createManyIncidents'])
  }).prefix('/incidents').use(middleware.auth({
    guards: ['api'],
  }))




  router.group(() => {
    router.post('/', [IncidentImagesController, 'createIncidentImage'])
    router.get('/', [IncidentImagesController, 'getIncidentImages'])
    router.get('/:incidentId', [IncidentImagesController, 'getIncidentImagesByIncidentId'])
    router.delete('/:incidentImageId', [IncidentImagesController, 'deleteIncidentImage'])
  }).prefix('/incident-images')

}).prefix('/api')

