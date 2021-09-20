import { Router, Request, Response } from 'express'
import usersController from '../controllers/users'
import { usersSchema, authSchema } from '../models/users'

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

function authValidation(req: Request, res: Response, next: any){
    const { error } = authSchema.validate(req.body)
    if(error == null){
        return next()
    }
    const { details } = error
    console.log(details.map(item => item.message).join(','))    
    res.status(422).end()    
}

const router = Router()

router.get('/users', usersController.getAllUsers)
router.get('/users/:id', usersController.getOneUser)
router.post('/users', usersValidation, usersController.insertUser)
router.patch('/users/:id', usersValidation, usersController.updateUser)
router.post('/users/auth', authValidation, usersController.loginAuthentication)
router.post('/users/logoff', usersController.logoffAuthentication)

export default router