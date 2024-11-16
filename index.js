const express = require('express')
const mongoose = require('mongoose');
//const Product =require('./models/product.model.js');
const productRoutes=require('./routes/product.route.js');
const app = express()
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// routes
app.use("/api/products",productRoutes);

app.get('/',(req,res)=>{
res.send("Hello from Node App Updated");
});
//connect to mongodb
mongoose.connect("mongodb+srv://Admin:MTIuEbDC0jQjR5JY@backenddb.2hmyq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log('Connected to DB !');
    app.listen(3000,()=>{
    console.log('Server running in 3000 port');
});
})
.catch(()=>{
    console.log('Connection Failed !');
});
// c6bd2b7695ac19
//O6vph1ghWoakzwYb
// MTIuEbDC0jQjR5JY