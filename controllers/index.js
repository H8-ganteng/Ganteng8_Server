const { User, Question } = require('../models')

class Controller {
    static createUser(req, res, next) {
        const { username, email, password } = req.body
        const newUser = { username, email, password }
        User.findOne({
            where: {
                email: newUser.email
            }
        }).then(data => {
            if (data === null) {
                return User.create(newUser)
            }
            if (data.password !== newUser.password) {
                let compare = false
                throw compare
            }
        }).then(success => {
            res.status(201).json(success)
        }).catch(err => {
            if (err === false) {
                res.status(404).json({ msg: 'Wrong email/password' })
            } else {
                res.status(500).json({ msg: 'Internal server error' })
            }
        })
    }
    static deleteUser(req, res, next) {
        
    }
    static getQuestions(req, res, next) {
        Question.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({ msg: 'Internal server error' })
            })
    }
}
module.exports = Controller