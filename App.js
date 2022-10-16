const connectToMongo = require('./db')

connectToMongo();

const express = require('express')
const app = express()
var cors = require('cors')


app.use(cors())

const port = process.env.PORT || 5000;
app.use (express.json())


// available routes
app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Notebook backend listening on port ${port}`)
})