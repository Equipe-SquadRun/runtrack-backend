import { Request, Response } from 'express'
const { Sequelize } = require('../models')
const database = require('../models')

class UsersController {

    static async getAllUsers(req: Request, res: Response, next: any){
        try {
            const users = await database.users.findAll()
            users.password = ''
            return res.status(200).json(users)
            // return res.status(200).json(users.map(item => {
            //     item.password = ''
            //     return item
            // }))
        }
        catch(error){
            console.log(error)            
            return res.status(500).end()
        }
    }

}

module.exports = UsersController