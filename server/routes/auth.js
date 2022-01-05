const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt')

const { sign } = require('jsonwebtoken')


router.post('/signup', async (req, res) => {
  const { username, password } = req.body

  const user = await Users.findOne({ where: { username: username } })

  if (user) res.json({ error: 'Username taken'})

  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    }).then((newUser) => {
      res.json(newUser)
    })
  })
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  console.log(req.body)
  
  const user = await Users.findOne({ where: { username: username } })
  console.log(user)
  
  if (!user) res.json({ error: "User not found"})

  bcrypt.compare(password, user.password).then( async (match) => {
    if (!match) res.json({ error: "Invalid credentials"})

    const accessToken = sign(
      { username: user.username, id: user.id },
      'secret'
    )

    res.json(accessToken)
  })
})

module.exports = router;