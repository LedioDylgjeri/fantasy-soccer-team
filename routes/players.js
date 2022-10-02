import { Router } from 'express'
import * as playersCtrl from '../controllers/players.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


export {
  router
}