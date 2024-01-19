const mongoose = require('mongoose')
// const autoIncrement = require("mongoose-auto-increment"); //FIXME 


// making the schema
let productSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
})

// productSchema.plugin(autoIncrement.plugin, {
//     model: 'Product',
//     field: 'productId',
//     startAt: 1,
// });

const Product = mongoose.model('products',productSchema);

module.exports = Product;