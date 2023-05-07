const express = require('express')
const cors = require('cors')
const app = express()
const port =process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get('/',(req, res) => {
    res.send('hello world')
})

app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port - ${port}`)
})