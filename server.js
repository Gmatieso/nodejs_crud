const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose
const Product = require('./models/productModel'); // import product model from models/productModel.js 
const app = express(); // initialize express    
const  port = 3000; // we will use this later

app.use(express.json()); // we will use this later 
// setting middleware to use form url encoded 
app.use(express.urlencoded({extended: false}))

// create a GET route
app.get('/', (req, res) => {
  res.send('Express server is running');
});

// create a GET route for products
 app.get('/products', async (req, res) => { 
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});  
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});
  }
})


// create a POST route for products
app.post('/products', async (req, res) => { 
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  
  }
});

//update a product on PUT route
app.put('/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id,req.body)
      // we cannot find any product with the given ID in the database 
      if(!product) {
        return res.status(404).json({message: 'cannot find any product with ID{${id}'});
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
      
    } catch (error) {
      console.log(error.messaage);
      res.status(500).json({message: error.message});
    }
})

//delete a product on DELETE route
app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      return res.status(404).json({message: 'cannot find any product with ID{${id}'});
    }
    res.status(200).json({message: 'product deleted successfully'})
    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
    
  }
})

// connect to mongoDB database 
mongoose.
connect('mongodb+srv://admin:sOIPZAlZVS3i3eTO@cluster0.qac5cai.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
  console.log('DB Connected!')

  app.listen(port, () => { // we will use this later
    console.log(` app listening at http://localhost:${port}`);
  });
}).catch(err => {
  console.log(err);
});