import request from 'supertest'
import app from '../src/app'

describe('Testar a autenticação do sistema', () => {
    it('O POST com o endpoint /users/auth precisa retornar o status 200', async () => {
        
        // Login criado para poder ter a verificação de login e senha
        const loginTeste = {
            id: 1,
            name: 'Nome',
            login: 'nome@gmail.com',
            password: '12345678'
        }
        await request(app).post('/users').send(loginTeste)

        // Dados a serem testados pelo TDD
        const payload = {
            login: 'nome@gmail.com',
            password: '12345678'
        }

        // Respostas esperadas
        const res = await await request(app).post('/users/auth').send(payload)
        expect(res.status).toEqual(200)
        expect(res.body.auth).toBeTruthy()
        expect(res.body.token).toBeTruthy()
    })
    it('O POST com o endpoint /users/auth precisa retornar o status 401', async () => {
        const payload = {
            login: 'nome@gmail.com',
            password: '45789124'
        }
        const res = await await request(app).post('/users/auth').send(payload)
        expect(res.status).toEqual(401)        
    })
    it('O POST com o endpoint /users/auth precisa retornar o status 422', async () => {
        const payload = {
            login: 'nome@gmail.com',
            password: '4578'
        }
        const res = await await request(app).post('/users/auth').send(payload)
        expect(res.status).toEqual(422)        
    })
    it('O POST com o endpoint /users/logoff precisa retornar o status 200', async () => {        
        const res = await await request(app).post('/users/logoff')
        expect(res.status).toEqual(200)        
    })
})