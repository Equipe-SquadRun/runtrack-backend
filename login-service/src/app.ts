import express from 'express'
import helmet from 'helmet'
import accountsRouter from './routes/accounts'

const app = express()
app.use(helmet())
app.use(express.json())

app.use(accountsRouter)

const port = parseInt(`${ process.env.PORT }`)

app.listen(3001)
console.log(`API funcionando na porta ${ port }`);
