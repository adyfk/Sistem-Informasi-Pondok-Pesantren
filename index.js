/* eslint-disable no-path-concat */
import express from 'express'
import routers from './routes'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())
routers(app)

const port = process.env.PORT || 5000
const server = app.listen(port, () => console.log(`Listening on port ${port}...`))

export default server
