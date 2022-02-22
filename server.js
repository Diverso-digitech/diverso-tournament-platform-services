import express from 'express'
import db from './utils/db.js'
import auth from './routes/auth.js'
import cors from 'cors'

const app = express()

app.use('/', auth)
app.use(cors())

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('API server started on http://localhost:' + server.address().port)
})