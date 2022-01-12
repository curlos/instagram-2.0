const express = require('express')
const { Users, Likes, Bookmarks } = require('../models')

const router = express.Router()

router.get('/:username', async (req, res) => {
  try {
    Users.findOne({ 
      where: { username: req.params.username },
      include: [Likes, Bookmarks]
    
    }).then((user) => {
      console.log(user)
      if (!user) {
        res.json({ error: 'User not found'})
      }
  
      res.json(user)
    })
  } catch (err) {
    console.error(err)
  }
})

module.exports = router;