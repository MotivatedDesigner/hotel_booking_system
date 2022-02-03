const express = require('express')

const { clientRouter, hotelRouter,roomRouter } = require('./app/routes')

const app = express()

// mongodb connection
require('./app/database')()

app.use(express.json())

// routers
app.use('/api/users', clientRouter)
app.use('/api/hotels', hotelRouter)
app.use('/api/rooms', roomRouter)



app.listen(3000, ()=> console.log('Server is running on http://localhost:3000') )