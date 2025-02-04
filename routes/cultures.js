import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as culturesCtrl from '../controllers/cultures.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
// GET to localhost:3001/api/cultures
router.get('/', checkAuth, culturesCtrl.index)
// GET to localhost:3001/api/cultures/:cultureID
router.get('/:cultureId', checkAuth, culturesCtrl.show)

export { router }