import { Request, Response } from 'express'
import { IUsers, IAuth } from '../models/users'

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
        const idUser = parseInt(req.params.id)
        const body = req.body as IUsers
        const index = users.findIndex(item => item.id === idUser)
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

function loginAuthentication(req: Request, res: Response, next: any){
    try {
        const authBody = req.body as IAuth
        const index = users.findIndex(item => item.login === authBody.login && item.password === authBody.password)
        if(index === -1){
            return res.status(401).end()
        }
        res.json({ auth: true, token: {} })
    }
    catch(error){
        console.log(error)
        res.status(400).end()
    }
}

function logoffAuthentication(req: Request, res: Response, next: any){
    res.json({ auth: false, token: null })
}

export default { getAllUsers, getOneUser, insertUser, updateUser, loginAuthentication, logoffAuthentication }