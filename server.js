import express from 'express'
import db from './utils/db.js'

const app = express()

const server = app.listen(process.env.PORT || 8000, function () {
    console.log('API server started on http://localhost:' + server.address().port)
})