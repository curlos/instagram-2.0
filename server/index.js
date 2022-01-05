const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

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
