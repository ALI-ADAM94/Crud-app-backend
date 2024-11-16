const express=require("express");
const Product =require('../models/product.model.js');
const router=express.Router();
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct}=require('../controllers/product.controller.js');
//get and post
router.get('/',getProducts);
router.get("/:id",getProduct);
router.post("/",createProduct);
// update product
router.put("/:id",updateProduct);
// deleteProduct
router.delete("/:id",deleteProduct);
module.exports=router;