if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const http = require('http').Server(app)
const io = require('socket.io')(http,{
    cors: {
        origin: `http://localhost:${port}`,
        methods: ['GET', 'POST'],
        creadentials: true
    },
    allowEIO3 : true
})

var cors = require('cors')
const routes = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// http.listen(port, ()=>{
//     console.log('server started')
// })