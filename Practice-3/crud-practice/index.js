const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 7000

//middleware
app.use(cors())
app.use(express.json())



const uri = "mongodb+srv://khanzia16phy102:77GaYuM0Zhq04jBU@cluster0.mf37tl1.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        await client.connect();

        const userCollection = client.db("usersDB").collection("users");;

        app.get('/users', async (req, res) => {
            const cursor = userCollection.find()
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await userCollection.findOne(query);
            res.send(result)
        })

        app.post('/users', async (req, res) => {
            const user = req.body
            const result = await userCollection.insertOne(user);
            res.send(result)
        })

        app.put('/users/:id', async (req, res) => {
            const id = req.params.id 
            const user = req.body
            res.send(user)
        })

        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await userCollection.deleteOne(query);
            res.send(result)
        })

        await client.db("admin").command({ ping: 1 });

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('yah you done it')
})

app.listen(port, () => {
    console.log(`Port is running in - ${port}`)
})