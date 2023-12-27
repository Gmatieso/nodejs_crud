const express = require('express'); // import express
const app = express(); // initialize express    
const  port = 3000; // we will use this later

// create a GET route
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => { // we will use this later
  console.log(` app listening at http://localhost:${port}`);
});