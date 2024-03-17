import express from 'express'
import db from './config/db.mjs'
import routes from './routes/index.mjs'
import { PORT } from './config/environment.mjs'
const app = express()

db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))

app.listen(PORT, function () {
    console.log('Server is running at port ' + PORT)
})

app.use(express.json())

//GET, POST, PUT, DELETE
app.use('/', routes)