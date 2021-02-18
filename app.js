const express = require('express')
const app = express()
var cors = require('cors')
const routes = require('./routes/index')
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})