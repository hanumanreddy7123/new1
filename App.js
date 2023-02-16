const express=require('express')
const req = require('express/lib/request')
const cors=require('cors')
const db=require('./db')
const app=express()
app.use(express.json())
app.use(cors())
const {login}=require('./controllers/login')
const {products}=require('./controllers/products')
const {getproducts}=require('./controllers/getproducts')
const {getproductbyid}=require('./controllers/productbyid')
const { editproducts } = require('./controllers/editproducts')
const {delproduct}=require('./controllers/delproducts')
const { signup } = require('./controllers/signup')
const { cart } = require('./controllers/cart')
const { getcart } = require('./controllers/getcart')
app.post('/login',login)//both
app.get('/products',products)//buyer
app.post('/addproducts',products)//seller
app.get('/get',getproducts)//seller
app.post('/edit',editproducts)//seller
app.get('/getproduct/:id',getproductbyid)
app.post('/delete',delproduct)//seller
app.post('/signup',signup)
app.post('/cart',cart)
app.post('/getcart',getcart)
app.listen(5000,()=>
{
    console.log("server started at 5000")
})