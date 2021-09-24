import { IUsers, IAuth } from '../interfaces/users';
import { Request, response, Response } from 'express'
const { Sequelize } = require('../models')
const database = require('../models')

class UsersController {

    static async getAllUsers(request: Request, response: Response, next: any){
        try {
            const users = await database.users.findAll()
            users.password = ''
            return response.status(200).json(users)            
        }
        catch(error: unknown){
            if(error instanceof SyntaxError){
                return response.status(500).json(error.message)
            }
        }
    }

    static async getOneUser(request: Request, response: Response, next: any){
        const { id } = request.params
        try {
            const user = database.users.findOne({
                where: {
                    id: Number(id)
                }
            })   
            return response.status(200).json(user)
        }
        catch(error: unknown){
            if(error instanceof SyntaxError){
                return response.status(500).json(error.message)
            }
        }
    }

    static async createUser(request: Request, response: Response, next: any){
        const newUser = request.body as IUsers
        try {
            const newUserCreated = await database.users.create(newUser)
            return response.status(201).json(newUserCreated)
        }
        catch(error: unknown){
            if(error instanceof SyntaxError){
                return response.status(500).json(error.message)
            }
        }
    }

    static async updateUser(request: Request, response: Response, next: any){
        const { id } = request.params
        const newData = request.body as IUsers
        try {
            await database.users.update(newData, {
                where: {
                    id: Number(id)
                }
            })
            const updatedUser = await database.users.findOne({
                where: {
                    id: Number(id)
                }
            })
            return response.status(200).json(updatedUser)
        }
        catch(error: unknown){
            if(error instanceof SyntaxError){
                return response.status(500).json(error.message)
            }
        }
    }

    static async loginAuthentication(req: Request, res: Response, next: any){
        try {
            const authBody = req.body as IAuth
            const index = database.users.findIndex(item => item.login === authBody.login && item.password === authBody.password)
            if(index === -1){
                return res.status(401).end()
            }
            res.json({ auth: true, token: {} })
        }
        catch(error){
            if(error instanceof SyntaxError){
                return response.status(400).json(error.message)
            }
        }
    }
    
    static async logoffAuthentication(req: Request, res: Response, next: any){
        res.json({ auth: false, token: null })
    }
    

}

module.exports = UsersController