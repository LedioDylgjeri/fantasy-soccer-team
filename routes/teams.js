import { Router } from 'express'
import * as teamsCtrl from '../controllers/teams.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, teamsCtrl.index)

router.get('/new', isLoggedIn, teamsCtrl.new)

router.post('/', isLoggedIn, teamsCtrl.create)

router.get('/:id', teamsCtrl.show)

router.post('/:id/players', isLoggedIn, teamsCtrl.addPlayer)

router.delete('/:id', isLoggedIn, teamsCtrl.delete)



export {
  router
}