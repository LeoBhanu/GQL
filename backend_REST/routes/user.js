const express = require('express');
const router = express.Router()

const User = require('../models/users');


 router.get('/:id', async (req, res, next) => {
    try {
       const user = await User.findById(req.params.id)
       if (!user) {
          return res.send({
             status: 'Failed',
             code: 0,
             message: 'User not found',
             data: []
          })
       }
       return res.send({
          status: 'Success',
          code: 1,
          message: 'User fetched',
          data: user
       })
    } catch (error) {
       res.status(404).send(error.message)
    }
 })

 module.exports = router;