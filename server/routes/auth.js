const express = require('express')
const passport = require("passport");
const { Users } = require('../models')
const bcrypt = require('bcrypt')

const router = express.Router()

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

router.post('/login', async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err
    if (!user) res.send({ error: 'Wrong credentials' })
    else {
      req.logIn(user, (err) => {
        if (err) throw err
        res.json(req.user)
      })
    }
  })(req, res, next)
})

module.exports = router;