import { Request, Response } from 'express'
import { IUsers } from '../models/users'

const accounts : IUsers[] = []

function getAllAccounts(req: Request, res: Response, next: any){
    res.json(accounts)
}

function getOneAccount(req: Request, res: Response, next: any){
    try {
        const id = parseInt(req.params.id)
        const index = accounts.findIndex(item => item.id === id)
        if(index === -1){
            return res.status(404).end()        
        }
        else {
            return res.json(accounts[index])
        }
    }
    catch(error){
        console.log(error)
        res.status(400).end()
        
    }
}

function addAccount(req: Request, res: Response, next: any){
    try {
        const newAccount = req.body as IUsers
        accounts.push(newAccount)
        res.status(201).json(newAccount)
    }
    catch(error){
        console.log(error)
        res.status(400).end()        
    }
}

export default { getAllAccounts, getOneAccount, addAccount }