const express = require('express')
const app = express.Router()
const Controller = require('../controllers/index')

app.post('/login', Controller.addUser)
app.post('/question', Controller.getQuestions)


// GET / => intro web
// POST /login
// GET /questions

// ##ROUTE ###endpoints

// GET /questions