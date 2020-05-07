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
    create: async (req, res) => {

        const { username, password, eMail } = req.body;

        try {
            const hash = await bcrypt.hash(password, 10);

            const user = new User({
                username,
                password: hash,
                eMail,
            });

            const userData = await user.save();

            res.status(201).json(userData)

        } catch (error) {
            res.status(404).json(err);
        }
      
    }
}


