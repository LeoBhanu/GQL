const express = require('express');
const router = express.Router();

const Post = require('../models/posts');

 router.get('/', async (req, res, next) => {
    try {
       const posts = await Post.find({})
       if (!posts.length) {
          return res.send({
             status: 'Failed',
             code: 0,
             message: 'Posts not found',
             data: []
          })
       }
       return res.send({
          status: 'Success',
          code: 1,
          message: 'Posts fetched',
          data: posts
       })
    } catch (error) {
       res.status(404).send(error.message)
    }
 })

 module.exports = router;