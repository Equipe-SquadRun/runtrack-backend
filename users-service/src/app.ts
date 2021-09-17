import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'

const app = express()
const port = parseInt(`${ process.env.PORT }`)

app.use(helmet())
app.listen(port)

console.log(`API funcionando na porta ${ port }`);
