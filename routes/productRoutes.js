const express = require('express');
const router = express.Router();
const { getProducts, getProduct, postProduct, updateProduct, deleteProduct } = require('../controllers/productController'); // import getProducts function from controllers/productController.js   

// create a GET route for products
router.get('/',getProducts);


// create a GET route for a single product
router.get('/:id', getProduct)
    
  // create a POST route for products
router.post('/', postProduct);
  
  //update a product on PUT route
router.put('/:id', updateProduct);
  
  //delete a product on DELETE route
router.delete('/:id', deleteProduct)

  // exports router out of this file 
module.exports = router;