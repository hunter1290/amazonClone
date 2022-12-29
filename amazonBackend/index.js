const express = require('express');
const app = express();
const Product = require('./db/Product')
const stripe = require('stripe')("sk_test_51LxY8ySHQk2RUqWubr3ssgvX3k1td0ZP7cHLORnOW5nOj9Yp0HoRSNBDh1Ejt1hpAsxMMs96R22TAFm1Aeg4BX32005SMnSUxX")
require('./db/config');
const User = require("./db/User")


const cors = require('cors');
const { create } = require('./db/User');

app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.status(200).send("This is here")
})

app.post("/add-product", async (req, res) => {
    // let product = new Product(req.body);
    // let result = await product.save();
    console.log(req.body,"body is here");
    Product.create(req.body,(err,data)=>{
        if(err)
        {
           res.status(500).send(err)
        }else{
          res.status(201).send(data);
        }
    })
})

app.get("/get-product",(req,res)=>{
    Product.find((err,data)=>{
        if(err)
        {
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.post("/signup-user",(req,res)=>{
    if(req.body.name && req.body.email && req.body.password)
    User.create(req.body,(err,data)=>{
        if(err)
        {
             res.status(500).send(err);
        }
        else{
            res.status(201).send("User Creatd");
        }
    })
})

app.post("/login-user", async (req, res) => {
    // console.log(req.body.password)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
           
                res.status(201).send(user);

            }
            else{
                res.status(500).send({message:"NO USER FOUND"});
            }

    }
    else {
        res.send({message:"NO USER FOUND"});
    }
})


app.listen(5000, (req, res) => {
    console.log("server is running");
})