# Node CRUD Project README
## Overview
This repository houses a Node.js project that implements a CRUD (Create, Read, Update, Delete) functionality. The application is designed to interact with a database, providing a seamless way to manage data through a user-friendly interface.

## Features
- Create: Add new records to the database.
- Read: Retrieve and display existing records from the database.
- Update: Modify and update records with new information.
- Delete: Remove records from the database.
## Technologies Used
- Node.js: The project is built using Node.js, providing a robust and scalable runtime for JavaScript.
- Express.js: A minimal and flexible Node.js web application framework used for building the server.
- MongoDB: A NoSQL database used for storing and retrieving data efficiently.
- Mongoose: An elegant MongoDB object modeling tool for Node.js, used for interacting with the MongoDB database.
## Getting Started
To run this project locally, follow these steps:

## Clone the Repository:
```
git clone https://github.com/your-username/node-crud-project.git
```
Install Dependencies:
```
cd node-crud-project
npm install
```
Configure the Database:

Create a MongoDB database and obtain the connection URI.
Update the config/db.js file with your MongoDB URI.
Run the Application:

```
npm start
```
The application will be accessible at http://localhost:3000.

## API Endpoints
 #### Create Record:
- Endpoint: POST /api/products
Request Body: JSON object with products details.
#### Read Records:
- Endpoint: GET /api/products
Response: JSON array containing all products.
#### Update Record:
- Endpoint: PUT /api/products/:id
Request Body: JSON object with updated products details.
#### Delete Record:
 - Endpoint: DELETE /api/products/:id
#### Screenshot
![image](https://github.com/Gmatieso/nodejs_crud/assets/55885416/2697de2a-f94c-45c5-93c8-36970d7f8c0f)

## Contributing
Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and suggestions are highly appreciated.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Get your deployed API here!
https://node-api-v2-kmge.onrender.com/api/products

## Happy coding! 🚀
