import express from 'express'
import cors from 'cors'
import userroute from './routes/userroute'
import adminroute from './routes/adminroute'
import{PORT, mongoURL} from './config'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/user', userroute)
app.use('/admin', adminroute)

mongoose.connect(mongoURL)
app.listen(PORT, ()=> console.log('server running on port ' + PORT))