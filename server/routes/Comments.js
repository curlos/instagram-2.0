const express = require('express')
const router = express.Router()
const { Comments, Posts } = require('../models')
const { validateToken } = require('../middleware/AuthMiddleware')

router.get('/:postId', async (req, res) => {
  try {
    const postId = req.params.postId
    const comments = await Comments.findAll({ where: { PostId: postId}})
    res.json(comments)
  } catch (err) {
    console.error(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const { PostId, text, username } = req.body

    console.log(req.body)

    await Comments.create({ PostId, text, username })

    const updatedPost = await Posts.findByPk(PostId, {
      include: [Comments]
    })
    res.json(updatedPost.Comments)
  } catch (err) {
    console.error(err)
  }
})


module.exports = router;