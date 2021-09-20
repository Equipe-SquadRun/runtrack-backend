import request from 'supertest'
import app from '../src/app'

describe('Testar as rotas do users.ts', () => {
    
    // Testes realizados com o POST
    it('O POST com o endpoint /users precisa retornar o status 201', async () => {
        const payload = {
            id: 1,
            name: 'Nome',
            login: 'nome@gmail.com',
            password: '12345678'
        }
        const res = await request(app).post('/users').send(payload)
        expect(res.status).toEqual(201)
        expect(res.body.id).toBe(1)
    })
    it('O POST com o endpoint /users precisa retornar o status 400', async () => {
        const payload = {
            id: 1,
            telefone: "787908098",
            class: "IT"
        }
        const res = await request(app).post('/users').send(payload)
        expect(res.status).toEqual(422)    
    })

    // Testes realizados com o PATCH
    it('O PATCH com o endpoint /users/:id precisa retornar o status 200', async () => {
        const payload = {            
            name: 'Nome Sobrenome',
            login: 'nome.sobrenome@gmail.com',
            password: '1234567890'
        }
        const res = await request(app).patch('/users/1').send(payload)
        expect(res.status).toEqual(200)
        expect(res.body.id).toBe(1)
    })
    it('O PATCH com o endpoint /users/:id precisa retornar o status 404', async () => {
        const payload = {            
            name: 'Nome Sobrenome',
            login: 'nome.sobrenome@gmail.com',
            password: '1234567890'
        }
        const res = await request(app).patch('/users/abc').send(payload)
        expect(res.status).toEqual(404)    
    })
    it('O PATCH com o endpoint /users/:id precisa retornar o status 404', async () => {
        const payload = {            
            name: 'Nome Sobrenome',
            login: 'nome.sobrenome@gmail.com',
            password: '1234567890'
        }
        const res = await request(app).patch('/users/-1').send(payload)
        expect(res.status).toEqual(404)
    })

    // Testes realizados com o GET
    it('O GET com o endpoint /users precisa retornar o status 200', async () => {
        const res = await request(app).get('/users')
        expect(res.status).toEqual(200)
        expect(Array.isArray(res.body)).toBeTruthy()
    })
    it('O GET com o endpoint /users/:id precisa retornar status 200', async () => {
        const res = await request(app).get('/users/1')
        expect(res.status).toEqual(200)
        expect(res.body.id).toBe(1)
    })    
    it('O GET com o endpoint /users/:id precisa retornar status 404', async () => {
        const res = await request(app).get('/users/2')
        expect(res.status).toEqual(404)    
    })
    it('O GET com o endpoint /users/:id precisa retornar status 400', async () => {
        const res = await request(app).get('/users/abc')
        expect(res.status).toEqual(400)    
    })    
})
