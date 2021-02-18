const express = require('express')
const app = express.Router()
const Controller = require('../controllers/index')

app.post('/createUser', Controller.createUser)
app.delete('/deleteUser', Controller.deleteUser)
app.get('/question', Controller.getQuestions)


module.exports = app
// GET / => intro web
// POST /login
// GET /questions

// ##ROUTE ###endpoints

// GET /questions