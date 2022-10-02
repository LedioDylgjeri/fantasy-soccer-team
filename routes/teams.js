import { Router } from 'express'
import * as teamsCtrl from '../controllers/teams.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, teamsCtrl.index)
router.get('/new', isLoggedIn, teamsCtrl.new)
router.get('/:id', isLoggedIn, teamsCtrl.show)
router.post('/', isLoggedIn, teamsCtrl.create)
router.delete('/:id', isLoggedIn, teamsCtrl.delete)



export {
  router
}