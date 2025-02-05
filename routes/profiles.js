import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
// GET to localhost:3001/api/profiles
router.get('/', checkAuth, profilesCtrl.index)
// GET to localhost:3001/api/profiles/:id
router.get('/:id', checkAuth, profilesCtrl.show)
// PUT to localhost:3001/api/profiles/:id
router.put('/:id', checkAuth, profilesCtrl.update)
// PUT to localhost:3001/api/profiles/:id/add-photo
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)

export { router }
