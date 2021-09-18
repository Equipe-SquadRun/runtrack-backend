import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import usersRouter from './routes/users'

const app = express()
app.use(helmet())
app.use(express.json())
app.use(usersRouter)

export default app
