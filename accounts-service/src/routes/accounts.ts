import { Router, Request, Response } from 'express'
import accountsController from '../controllers/accounts'

const router = Router()

router.get('/', accountsController.getAllAccounts)
router.get('/:id', accountsController.getOneAccount)
router.post('/', accountsController.addAccount)

export default router