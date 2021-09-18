import { Router, Request, Response } from 'express'
import usersController from '../controllers/users'

const router = Router()

router.get('/users', usersController.getAllUsers)
router.get('/users/:id', usersController.getOneUser)
router.post('/users', usersController.insertUser)

export default router