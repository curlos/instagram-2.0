const express = require('express')
const router = express.Router()
const { Likes } = require('../models')

router.post('/', async (req, res) => {
  try {
    const { PostId, UserId } = req.body

    const found = await Likes.findOne({
      where: { PostId: PostId, UserId: UserId}
    })

    if (!found) {
      await Likes.create({ PostId: PostId, UserId: UserId })
      res.json({ liked: true })
    } else {
      await Likes.destroy({
        where: { PostId: PostId, UserId, UserId }
      })
      res.json({ liked: false })
    }
  } catch (err) {
    console.error(err)
  }
})


module.exports = router;