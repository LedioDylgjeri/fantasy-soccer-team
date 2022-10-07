import { Router } from 'express'
import * as playersCtrl from '../controllers/players.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', isLoggedIn, playersCtrl.index)

router.get('/new', isLoggedIn, playersCtrl.new)

router.get('/:id', isLoggedIn, playersCtrl.show)

router.get('/:id/edit', isLoggedIn, playersCtrl.edit)

router.post('/', isLoggedIn, playersCtrl.create)

router.put('/:id', isLoggedIn, playersCtrl.editPlayer)

router.delete('/:id', isLoggedIn, playersCtrl.delete)


export {
  router
}