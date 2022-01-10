const express = require('express')
const router = express.Router()
const { Posts } = require('../models')

router.get('/', async (req, res) => {
  const listOfPosts = await Posts.findAll({
    order: [
      ['id', 'DESC']
    ],
  })
  res.json(listOfPosts)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const post = await Posts.findByPk(id)
  res.json(post)
})

router.get('/username/:username', async (req, res) => {
  const posts = await Posts.findAll({ 
    where: { username: req.params.username },
    order: [
      ['id', 'DESC']
    ],
 })
  res.json(posts)
})

router.post('/', async (req, res) => {
  const post = req.body
  console.log(req.body)
  await Posts.create(post)
  res.json(post)
})

module.exports = router;