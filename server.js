import express from 'express'
import db from './utils/db.js'
import auth from './routes/auth.js'

const app = express()

app.use('/', auth)

const server = app.listen(process.env.PORT || 8000, function () {
    console.log('API server started on http://localhost:' + server.address().port)
})