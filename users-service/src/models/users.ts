export interface IUsers {
    id: number,
    name: string,
    login: string,
    password: string
}

import Joi from 'joi'
const usersSchema = Joi.object({
    id: Joi.number().integer().min(1),
    name: Joi.string().min(3).max(200).required(),
    login: Joi.string().email().required(),
    password: Joi.string().min(8).max(100).required()
})

export { usersSchema }