import { Request, Response } from 'express'
import { IPessoa } from '../models/pessoa'

const pessoas : IPessoa[] = []

function getPessoas(req: Request, res: Response, next: any){
    res.json(pessoas)
}

function addPessoa(req: Request, res: Response, next: any){
    try {
        const newPessoa =req.body as IPessoa
        pessoas.push(newPessoa)
        res.status(201).json(newPessoa)
    }
    catch(error){
        console.log(error)
        res.status(400).end()        
    }
}

export default { getPessoas, addPessoa }