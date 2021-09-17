import { Router, Request, Response } from 'express'
import pessoasController from '../controllers/pessoas'

const router = Router()

router.get('/', pessoasController.getPessoas)
router.post('/', pessoasController.addPessoa)

export default router