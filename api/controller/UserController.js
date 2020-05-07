const mongoose = require('mongoose');
const User = require('../models/UserModel')
const bcrypt = require('bcrypt');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find()
            res.status(200).json({
                status: "Success",
                count: users.length,
                users
            })
        } catch (error) {
            res.status(404).json({
                error
            })
        }
    },
    getUsersById: async (req, res) => {
        const id = req.params.userId; 
        try {
            const user = await User.findById(id)
            res.status(200).json({
                status: "Success",
                user
            })
        } catch (error) {
            res.status(404).json({
                error
            })
        }
    },
    create: (req, res) => {

        const { username, password, eMail } = req.body;

        bcrypt.hash(password, 10).then((hash) => {
            const user = new User({
                username,
                password: hash,
                eMail,
            });
        
            const promise = user.save();
            promise.then((userData) => {
                res.status(201).json(userData)
            }).catch((err) => {
                res.status(404).json(err);
            });
        });

    }
}


