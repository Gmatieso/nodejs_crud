const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter product name'],
        },
        quantity: {
            type: Number,
            required: [true, 'Please enter product quantity'],
            default: 0,
        },
        price: {
            type: Number,
            required: [true, 'Please enter product price'],
            default: 0,
        },
        Image: {
            type: String,
            required: false,
        },
    }
    ,
    {   
        // tracks when data is saved to the database and when it was last updated/modified  
        timestamps: true,
    }
)

// create a model from the schema
const Product = mongoose.model('Product', productSchema);

// export the model
module.exports = Product;