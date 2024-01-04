const Product = require('../models/productModel'); // import product model from models/productModel.js 
const asyncHandler = require('express-async-handler'); // import express-async-handler to handle errors in async functions
// get all products from the database 
const getProducts = asyncHandler(async (req, res) => { 
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    //   console.log(error.message);
    //   res.status(500).json({message: error.message});  
    }
  })

  // get a single product from the database 
  const getProduct = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    //   console.log(error.message);
    //   res.status(500).json({message: error.message});
    }
  })

  // create a new product and save it to the database 
  const postProduct = asyncHandler(async (req, res) => { 
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
    //   console.log(error.message);
    //   res.status(500).json(error.message);
    res.status(500);
    throw new Error(error.message);
    }
  }
)

  // update a product in the database 
  const updateProduct = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id,req.body)
      // we cannot find any product with the given ID in the database 
      if(!product) {
        res.status(404);
        throw new Error('cannot find any product with ID{${id}');  
        }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
      
    } catch (error) {
    //   console.log(error.messaage);
    //   res.status(500).json({message: error.message});
    res.status(500);
    throw new Error(error.message);
    }
}
  )

// delete a product from the database 
const deleteProduct = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProduct = await Product.findByIdAndDelete(id);
      if (!deleteProduct) {
        res.status(404);
        // return res.status(404).json({message: 'cannot find any product with ID{${id}'});
        throw new Error('cannot find any product with ID{${id}');
      }
      res.status(200).json({message: 'product deleted successfully'})
      
    } catch (error) {
    //   console.log(error.message);
    //   res.status(500).json({message: error.message})
    res.status(500);
    throw new Error(error.message);
      
    }
  }
)

  module.exports = { getProducts, getProduct, postProduct, updateProduct, deleteProduct}