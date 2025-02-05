import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as culturesCtrl from '../controllers/cultures.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
// GET to localhost:3001/api/cultures
router.get('/', checkAuth, culturesCtrl.index)
// GET to localhost:3001/api/cultures/:cultureId
router.get('/:cultureId', checkAuth, culturesCtrl.show)
// POST to localhost:3001/api/cultures
router.post('/', checkAuth, culturesCtrl.create)
// POST to localhost:3001/api/cultures/:cultureId/lessons
router.post('/:cultureId/lessons', checkAuth, culturesCtrl.createLesson)
// PUT to localhost:3001/api/cultures/:cultureId
router.put('/:cultureId', checkAuth, culturesCtrl.update)

export { router }