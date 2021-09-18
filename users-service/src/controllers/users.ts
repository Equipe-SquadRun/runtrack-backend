import { Request, Response } from 'express'
import { IUsers } from '../models/users'

const users : IUsers[] = []

function getAllUsers(req: Request, res: Response, next: any){
    res.json(users)
}

function getOneUser(req: Request, res:Response, next: any){
    try {
        const id = parseInt(req.params.id)
        const index = users.findIndex(item => item.id === id)
        if(index === -1){
            res.status(404).end()
        }
        else {
            res.json(users[index])
        }
    }
    catch(error){
        console.log(`Erro no controller users.ts: ${ error }`)
        res.status(500).end()
    }
}

function insertUser(req: Request, res: Response, next: any){
    try {
        const newUser = req.body as IUsers
        users.push(newUser)
        res.status(201).json(newUser)
    }
    catch(error){
        console.log(`Erro no controller users.ts: ${ error }`)
        res.status(500).end()
    }
}

export default { getAllUsers, getOneUser, insertUser }