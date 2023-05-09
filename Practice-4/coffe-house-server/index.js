const express = require('express');
const app = express()
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 2000


//middleware
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.mf37tl1.mongodb.net/?retryWrites=true&w=majority`;


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

    const coffeCollections = client.db("coffesDB").collection("coffes");

    app.get('/coffes', async (req, res) => {
      const cursor = coffeCollections.find()
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/coffes/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeCollections.findOne(query);
      res.send(result)
    })

    app.post('/coffes', async (req, res) => {
      const coffe = req.body
      const result = await coffeCollections.insertOne(coffe);
      res.send(result)
    })

    app.put('/coffes/:id', async (req, res) => {
      const id = req.params.id;
      const coffe = req.body
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateCoffe = {
        $set: {
          name : coffe.name,
          chef : coffe.chef, 
          supplier : coffe.supplier,
          taste : coffe.taste,
          price : coffe.price,
          details : coffe.details,
          photo : coffe.photo
        },
      };
      const result = await coffeCollections.updateOne(filter, updateCoffe, options);
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
  res.send('hellow')
})

app.listen(port, () => {
  console.log(`port is running in - ${port}`)
})