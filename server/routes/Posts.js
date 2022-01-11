const express = require('express')
const router = express.Router()
const { Posts } = require('../models')

router.get('/', async (req, res) => {
  try {
    const listOfPosts = await Posts.findAll({
      order: [
        ['id', 'DESC']
      ],
    })
    res.json(listOfPosts)
  } catch (err) {
    console.error(err)
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const post = await Posts.findByPk(id)
  res.json(post)
})

router.get('/username/:username', async (req, res) => {
  try {
    const posts = await Posts.findAll({ 
      where: { username: req.params.username },
      order: [
        ['id', 'DESC']
      ],
   })
    res.json(posts)
  } catch (err) {
    console.error(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const post = req.body
    console.log(req.body)
    await Posts.create(post)
    res.json(post)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router;