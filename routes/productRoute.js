const express = require('express');
const route = express.Router();  
const productController = require('../controllers/productController');

//add product
route.post('/addProduct', async (req, res) => {
    try {
        console.log(req.body);
        let { name, price, quantity } = req.body;
        let data = await productController.addProduct(name, price, quantity);
        console.log(data);
        res.status(200).json({ message: "product added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error in add route" });
    }
});

//show products
route.get('/getProducts',async (req , res)=>{
    try {
        let data = await productController.getAllProducts();
        res.status(200).json({ message: data });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });

    }
})

//delete product
route.delete('/deleteProduct:id', async (req , res)=>{
    try {
        let id = req.params.id;
        let data = await productController.deleteProduct(id);
        res.status(200).json({ message: "product deleted" });
    } catch (error) {
        res.status(500).json({ message:"internal server error" });
    }
})

//patch 
route.patch('/editProduct:id', async (req, res) => {
    try {
        let id = req.params.id;
        let {quantity} = req.body;
        let data = await productController.editProduct(id, quantity);
        res.status(200).json({ done: data });
    } catch (error) {
        res.status(500).json({ message: "internal server error in route" });
    }
});

module.exports = route;
