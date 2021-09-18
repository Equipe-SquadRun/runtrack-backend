import app from './app'

const port = parseInt(`${ process.env.PORT }`)

app.listen(port, () => {
    console.log(`API funcionando na porta ${ port }`)
})
