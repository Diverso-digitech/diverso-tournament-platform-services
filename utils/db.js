import mongoose from 'mongoose'
import { dbString } from '../env.js'

const db = mongoose.connection
mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
db.on('connecting', () => console.log('connecting to MongoDB...'))
db.on('error', (error) => {
	console.log('Error in MongoDb connection: ' + error)
	mongoose.disconnect()
})
db.on('connected', () => console.log('MongoDB connected.'))
db.once('open', () => console.log('MongoDB connection opened.'))
db.on('reconnected', () => console.log('MongoDB reconnected!'))
db.on('disconnected', () => {
	console.log('MongoDB disconnected, connect again')
})

export default db
