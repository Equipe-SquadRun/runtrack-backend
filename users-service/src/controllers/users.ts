import { Request, Response } from 'express'
import { IUsers } from '../models/users'

const users : IUsers[] = []

function getAllUsers(req: Request, res: Response, next: any){
    res.json(users)
}

function getOneUser(req: Request, res:Response, next: any){
    try {
        const id = parseInt(req.params.id)
        if(!id){
            throw new Error("O ID está em um formato inválido")
        }
        const index = users.findIndex(item => item.id === id)
        if(index === -1){
            res.status(404).end()
        }
        else {
            res.status(200).json(users[index])
        }        
    }
    catch(error){
        console.log(`Erro no controller users.ts: ${ error }`)
        res.status(400).end()
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

function updateUser(req: Request, res: Response, next: any){
    try {
        const id = parseInt(req.params.id)

        if(!id){
            throw new Error('O ID informado não é válido.')
        }

        const body = req.body as IUsers
        const index = users.findIndex(item => item.id === id)

        if(index === -1){
            return res.status(404).end()
        }

        const userIndex = users[index]

        if(body.name){
            userIndex.name = body.name
        }
        if(body.login){
            userIndex.login = body.login
        }
        if(body.password){
            userIndex.password = body.password
        }

        users[index] = userIndex
        res.status(200).json(userIndex)
    }
    catch(error){
        console.log(error)
        res.status(400).end()        
    }
}

export default { getAllUsers, getOneUser, insertUser, updateUser }