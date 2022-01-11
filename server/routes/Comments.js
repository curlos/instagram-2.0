const express = require('express')
const router = express.Router()
const { Comments } = require('../models')
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
    const comment = req.body
    const username = req.body.username
    comment.username = username

    console.log(comment)

    await Comments.create(comment)
    res.json(comment)
  } catch (err) {
    console.error(err)
  }
})


module.exports = router;