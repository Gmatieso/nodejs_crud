const express = require('express');
const router = express.Router();
const Product = require('../models/productModel'); // import product model from models/productModel.js


// create a GET route for products
router.get('/', async (req, res) => { 
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message});  
    }
  });
// create a GET route for a single product
router.get('/:id', async (req, res) => {
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
router.post('/', async (req, res) => { 
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json(error.message);
    
    }
  });
  
  //update a product on PUT route
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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

  // exports router out of this file 
module.exports = router;