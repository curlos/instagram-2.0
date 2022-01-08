const express = require('express')
const { Users } = require('../models')

const router = express.Router()

router.get('/:username', async (req, res) => {
  Users.findOne({ where: { username: req.params.username } }).then((user) => {
    console.log(user)
    if (!user) {
      res.json({ error: 'User not found'})
    }

    res.json(user)
  })
})

module.exports = router;