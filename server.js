require('dotenv').config()
const express = require('express'); // import express
const mongoose = require('mongoose'); // import mongoose 
const app = express(); // initialize express    
const  port = process.env.port || 3000; // we will use this later
const productRoutes = require('./routes/productRoutes'); // import product routes 
const errorMiddleware = require('./middleware/errorMiddleware'); // import error middleware 

const MONGO_URI = process.env.MONGO_URL;

app.use(express.json()); // we will use this later 
// setting middleware to use form url encoded 
app.use(express.urlencoded({extended: false}))

app.use('/api/products', productRoutes); // use product routes in the app 

// create a GET route
app.get('/', (req, res) => {
  res.send('Express server is running');
});


app.use(errorMiddleware); // we will use this later

// connect to mongoDB database 
mongoose.
connect(MONGO_URI)
.then(() => {
  console.log('DB Connected!')

  app.listen(port, () => { // we will use this later
    console.log(` app listening at http://localhost:${port}`);
  });
}).catch(err => {
  console.log(err);
});

