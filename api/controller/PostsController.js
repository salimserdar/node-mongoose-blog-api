const mongoose = require('mongoose');
const Post = require('../models/PostModel')
const bcrypt = require('bcrypt');

module.exports = {
    getPosts: async (req, res) => {
        try {
            const posts = await Post.find().populate("user_id", "username -_id").select("title")
            res.status(200).json({
                status: "Success",
                count: posts.length,
                posts
            })
        } catch (error) {
            res.status(404).json({
                error
            })
        }
    },
    // getUsersById: async (req, res) => {
    //     const id = req.params.userId; 
    //     try {
    //         const user = await User.findById(id)
    //         res.status(200).json({
    //             status: "Success",
    //             user
    //         })
    //     } catch (error) {
    //         res.status(404).json({
    //             error
    //         })
    //     }
    // },
    create: async (req, res) => {

        const { user_id, title, content } = req.body;

        try {

            const post = new Post({
                user_id,
                title,
                content,
            });

            const postData = await post.save();

            res.status(201).json({
                status: "Success",
                createdUser: postData
            })

        } catch (error) {
            console.log('error', error)
            res.status(404).json(error);
        }
      
    }
}


