const express = require('express')
const router = express.Router()
const { Likes } = require('../models')

router.post('/', async (req, res) => {
  const like = req.body

  try {
    console.log(req.body)
    await Likes.create(like);
    res.json("success")
  } catch (err) {
    console.error(err)
  }
})


module.exports = router;