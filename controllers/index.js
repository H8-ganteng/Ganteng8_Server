const { User, Question } = require('../models')
const { generateToken } = require('../helpers/jwt')

class Controller {
    static createUser(req, res, next) {
        const { username } = req.body
        const newUser = { username }
        newUser.points = 0
        newUser.loggedIn = true
        User.findOne({
            where: {
                username: newUser.username
            }
        }).then(data => {
            if (data === null) {
                User.create(newUser)
                    .then(success => {
                        let token = generateToken({
                            id: success.id,
                            username: success.username
                        })
                        res.status(201).json({ msg: 'create new', access_token: token })
                    })
                    .catch(err => {
                        res.status(500).json(err)
                    })
            } else {
                if (data.loggedIn === true) throw false
                let token = generateToken({
                    id: data.id,
                    username: data.username
                })
                User.update({ loggedIn: true }, {
                    where: {
                        username: data.username
                    }
                })
                res.status(200).json({ msg: 'find one', access_token: token })
            }
        }).catch(err => {
            if (err === false) {
                res.status(400).json({ msg: 'Username must be unique' })
            } else {
                res.status(500).json(err)
            }
        })

    }
    static deleteUser(req, res, next) {
        const userId = req.body.userId
        User.destroy({
            where: {
                id: userId
            }
        }).then(success => {
            res.status(200).json({ msg: 'success delete user' })
        }).catch(err => {
            res.status(500).json({ msg: 'Internal server error' })
        })
    }
    static getQuestions(req, res, next) {
        Question.findAll()
            .then(data => {
                res.status(200).json({ msg: 'get data', data })
            })
            .catch(err => {
                res.status(500).json({ msg: 'Internal server error' })
            })
    }
}
module.exports = Controller