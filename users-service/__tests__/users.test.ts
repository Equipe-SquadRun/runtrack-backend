import request from 'supertest'
import { Request, Response } from 'express'
import app from '../src/app'

describe('Testar as rotas do users.ts', () => {
    it('O POST com o endpoint /users precisa retornar o status 201', async () => {
        const payload = {
            id: 1,
            name: 'Nome',
            email: 'nome@gmail.com',
            password: '12345678'
        }
        const res = await request(app).post('/users').send(payload)
        expect(res.status).toEqual(201)
    })
})
