import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import products from './data/products.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
const path= require("path");
dotenv.config()

connectDB()

const app=express()

 app.use(express.json())

app.get('/', (req,res)=>{
    res.send('API is running')
})



app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)

app.use(notFound)
app.use(errorHandler)

app.use(express.static(path.join(__dirname,'./frontend/build')));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./frontend/build/index.html'));
});
const PORT= process.env.PORT || 5000
app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))
