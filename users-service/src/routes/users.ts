import { Router, Request, Response } from 'express'
import usersController from '../controllers/users'
import { usersSchema } from '../models/users'

function usersValidation(req: Request, res: Response, next: any){
    const { error } = usersSchema.validate(req.body)
    if(error == null){
        return next()
    }
    const { details } = error
    const message = details.map(item => item.message).join(',')
    console.log(message)
    res.status(422).end()    
}

const router = Router()

router.get('/users', usersController.getAllUsers)
router.get('/users/:id', usersController.getOneUser)
router.post('/users', usersValidation, usersController.insertUser)
router.patch('/users', usersValidation, usersController.updateUser)

export default router