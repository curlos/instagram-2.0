const express = require('express')
const router = express.Router()
const { Posts, Bookmarks } = require('../models')

router.post('/', async (req, res) => {
  try {
    const { PostId, UserId } = req.body

    console.log(req.body)

    const found = await Bookmarks.findOne({
      where: { PostId: PostId, UserId: UserId}
    })

    if (!found) {
      await Bookmarks.create(req.body)
      const updatedPost = await Posts.findByPk(PostId, {
        include: [Bookmarks]
      })
      res.json(updatedPost.Bookmarks)
    } else {
      await Bookmarks.destroy({
        where: { PostId: PostId, UserId: UserId }
      })
      const updatedPost = await Posts.findByPk(PostId, {
        include: [Bookmarks]
      })
      res.json(updatedPost.Bookmarks)
    }
  } catch (err) {
    console.error(err)
    console.log(req.body)
  }
})


module.exports = router;