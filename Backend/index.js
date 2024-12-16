const express = require('express')
const mongoose = require('mongoose');
const Schema = require('./Models/Schema');
const cors = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT
const link=process.env.LINK

app.use(express.json());
app.use(cors());

async function connectDB() {
  try {
    await mongoose.connect(port);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/submit-form', async (req, res) => {
  const { name, salary } = req.body;

  try {
    const schema = new Schema({ name, salary });
    await schema.save(); 
    console.log('Form data received and saved:', { name, salary });
    res.send("Stored");
  } catch (error) {
    console.error('Error saving form data:', error);
    res.send("Not Stored");
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})