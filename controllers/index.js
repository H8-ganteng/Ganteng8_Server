const { User, Question } = require('../models')

class Controller {
    static createUser(req, res, next) {
        const { username } = req.body
        const newUser = { username }
        newUser.points = 0
        User.create(newUser)
            .then(success => {
                res.status(201).json({ msg: 'user create new', status: true })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ msg: err.message })
            })
        // User.findOne({
        // newUser.loggedIn = true
        //     where: {
        //         username: newUser.username
        //     }
        // }).then(data => {
        //     if (data === null) {
        //     } else {
        //         // if (data.loggedIn === true) throw false
        //         let token = generateToken({
        //             id: data.id,
        //             username: data.username
        //         })
        //         // User.update({ loggedIn: true }, {
        //         //     where: {
        //         //         username: data.username
        //         //     }
        //         // })
        //         res.status(200).json({ msg: 'find one', access_token: token })
        //     }
        // }).catch(err => {
        //     // if (err === false) {
        //     //     res.status(400).json({ msg: 'Username must be unique' })
        //     // } 
        //     console.log(err)
        //     res.status(500).json({ msg: err.message })
        // })
    }

    static deleteUser(req, res, next) {
        User.destroy({
            where: {
                username: req.body.username
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

    static getAllUser(req, res, next) {
        User.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({ msg: 'Internal server error' })
            })
    }
}
module.exports = Controller