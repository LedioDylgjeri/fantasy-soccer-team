import { Router } from 'express'
import * as teamsCtrl from '../controllers/teams.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', isLoggedIn, teamsCtrl.new)

export {
  router
}