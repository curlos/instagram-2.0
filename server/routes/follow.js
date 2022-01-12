const express = require('express')
const router = express.Router()
const { Posts, Likes } = require('../models')

router.post('/', async (req, res) => {
  try {
    const { PostId, UserId } = req.body

    const found = await Likes.findOne({
      where: { PostId: PostId, UserId: UserId}
    })

    if (!found) {
      await Likes.create({ PostId: PostId, UserId: UserId })
      const updatedPost = await Posts.findByPk(PostId, {
        include: [Likes]
      })
      res.json(updatedPost)
    } else {
      await Likes.destroy({
        where: { PostId: PostId, UserId, UserId }
      })
      const updatedPost = await Posts.findByPk(PostId, {
        include: [Likes]
      })
      res.json(updatedPost)
    }
  } catch (err) {
    console.error(err)
  }
})


module.exports = router;