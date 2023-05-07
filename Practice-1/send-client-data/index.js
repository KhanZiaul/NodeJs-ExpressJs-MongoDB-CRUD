const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')


app.use(cors())

const users = [
    {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "id": 1
    },
    {
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "id": 2
    },
    {
        "name": "Bob Johnson",
        "email": "bjohnson@example.com",
        "id": 3
    }
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})