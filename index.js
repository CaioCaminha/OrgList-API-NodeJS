const express = require('express')
const index = require('./server/routes')

const app = express();
const port = '3001'

app.use(express.urlencoded({extended: true}))
app.use(express.json())
index(app)

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))