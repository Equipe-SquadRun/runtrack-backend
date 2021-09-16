import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req, res, next) => {
    res.json({ sucesso: true })
})

export default router