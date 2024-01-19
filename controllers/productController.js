const product = require('../models/product');

const addProduct = async (_name , _price , _quantity)=>{
    try {
        let data = await product.create({
            name: _name,
            price: _price,
            quantity: _quantity
        })
        if(data){
            return data
        }else{
            console.log('error in adding product');
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error in controller" });
    }
}

const getAllProducts = async () => {
    try {
        let data = await product.find({}, { name: 1, price: 1, quantity: 1});
        return data // Add this return statement
    } catch (e) {
        console.log('Error in getting all users:', e);
    }
}

const deleteProduct = async (id) => {
    try {
        let data = await product.deleteOne({_id: id });
        if (data) {
            console.log('deleted successfully');
        } else {
            console.log("cannot delete");
        }
    } catch (e) {
        console.log('Error in deleting user:', e);
    }
}

const editProduct = async (id, _editvalue) => {
    try {
        let data = await product.findByIdAndUpdate({_id: id }, { quantity: _editvalue });
        return data
    } catch {
        console.log('cannot conn delete');
    }
}

module.exports = {addProduct, getAllProducts,deleteProduct, editProduct}