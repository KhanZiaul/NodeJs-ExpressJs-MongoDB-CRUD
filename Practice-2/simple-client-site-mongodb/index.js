const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())



const { MongoClient, ServerApiVersion ,ObjectId } = require('mongodb');
const uri = "mongodb+srv://khanzia16phy102:77GaYuM0Zhq04jBU@cluster0.mf37tl1.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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

        // const database = client.db("usersDB");
        // const userCollection = database.collection("users");

        const userCollection = client.db('usersDB').collection('users')

        app.get('/users', async(req,res)=>{
            const cursor = userCollection.find()
            const result = await cursor.toArray()
            res.send(result)
        })

        app.post('/users', async(req, res) => {
            const user = req.body
            const result = await userCollection.insertOne(user);
            res.send(result) 
        })

        app.delete('/users/:id', async(req,res)=>{
            const id = req.params.id;
            const query = { _id :new ObjectId(id)};
            const result = await userCollection.deleteOne(query)
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
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`CORS-enabled web server listening on port - ${port}`)
})