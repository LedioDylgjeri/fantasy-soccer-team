import { Router } from 'express'
import * as playersCtrl from '../controllers/players.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, playersCtrl.index)
router.get('/new', isLoggedIn, playersCtrl.new)
router.post('/', isLoggedIn, playersCtrl.create)
router.delete('/:id', isLoggedIn, playersCtrl.delete)

export {
  router
}