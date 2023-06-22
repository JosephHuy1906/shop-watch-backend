import express from 'express'
import user from './user.routes'
import auth from './auth.routes'

const router = express.Router();

router.use('/user', user)
router.use('/auth', auth)

export default router