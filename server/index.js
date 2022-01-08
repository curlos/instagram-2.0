const express = require('express')
const session = require("express-session")
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const passport = require("passport")
const logger = require('morgan')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
require('./passport/config')(passport)

const db = require('./models')

// Routers
const postRouter = require('./routes/posts')
app.use('/posts', postRouter)

const commentsRouter = require('./routes/comments')
app.use('/comments', commentsRouter)

const authRouter = require('./routes/auth')
app.use('/auth', authRouter)


// Sync database and start server
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server running on port 3001')
  })
})
