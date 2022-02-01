const express = require('express')

const { userRouter } = require('./app/routes')

const app = express()

// mongodb connection
require('./app/database')()

// parse request to body-parser
app.use(express.json())

// routers
app.use('/api/users', userRouter)

app.listen(3000, ()=> console.log('Server is running on http://localhost:3000') )