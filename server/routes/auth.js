const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt')

const { sign } = require('jsonwebtoken')


router.post('/signup', async (req, res) => {
  const { email, fullName, username, password } = req.body
  
  console.log(req.body)

  const user = await Users.findOne({ where: { username: username } })

  if (!email || !fullName || !username || !password) {
    res.json({ error: 'Missing required credentials' })
  } else if (user) {
    console.log('2')
    res.json({ error: 'Username taken'})
  } else {
    console.log('3')
    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        email: email,
        fullName: fullName,
        username: username,
        password: hash,
      }).then((newUser) => {
        res.json(newUser)
      })
    })
  }
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