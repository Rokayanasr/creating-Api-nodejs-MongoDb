// imports
const express = require('express');
const cors = require('cors');

const mongoose = require("mongoose");
const app = express ();
const path = require('path');
const productController = require('./controllers/productController');
const productRoute = require('./routes/productRoute');
const product = require('./models/product')

//connection
const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb://localhost:27017/Cart");
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
    }
  };
  connectDB();

//middlewsares
app.use(cors());

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
app.use('/products',productRoute)

// listen
app.listen(7070,()=>{
    console.log("hello i'm listening")
})

