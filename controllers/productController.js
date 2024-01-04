const Product = require('../models/productModel'); // import product model from models/productModel.js 

// get all products from the database 
const getProducts = async (req, res) => { 
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message});  
    }
  }

  // get a single product from the database 
  const getProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message});
    }
  }

  // create a new product and save it to the database 
  const postProduct = async (req, res) => { 
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json(error.message);
    
    }
  }

  // update a product in the database 
  const updateProduct = async (req, res) => {
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
}

// delete a product from the database 
const deleteProduct = async (req, res) => {
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
  }

  module.exports = { getProducts, getProduct, postProduct, updateProduct, deleteProduct}