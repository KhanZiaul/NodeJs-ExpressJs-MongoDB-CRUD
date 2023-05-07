const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')


app.use(cors());
app.use(express.json());

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

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id=users.length + 1 ;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})