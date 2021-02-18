const express = require('express')
const app = express.Router()
const Controller = require('../controllers/index')

app.get('/', (req, res) => {
    res.json({ msg: 'server is connected' })
})

app.post('/createUser', Controller.createUser)
app.get('/user', Controller.getAllUser)
app.delete('/deleteUser', Controller.deleteUser)
app.get('/questions', Controller.getQuestions)


module.exports = app