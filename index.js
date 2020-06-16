/* eslint-disable no-path-concat */
import express from 'express'
import routers from './routes'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import uest from 'uest'

dotenv.config()
const app = express()

app.use(uest())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

routers(app)

const port = process.env.PORT || 5000
const server = app.listen(port, () => console.log(`Listening on port ${port}...`))

export default server
