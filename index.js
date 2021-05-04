const express = require('express')
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
const port = '3001'
app.listen(port, () => console.log(`servidor rodando na porta ${port}`))