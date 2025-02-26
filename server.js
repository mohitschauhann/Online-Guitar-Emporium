import express from 'express';

import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import morgan from 'morgan';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';


//configure env
dotenv.config();



//databse config
connectDB();

//rest object
const app=express()

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


//Routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);


//rest api
app.get('/',(req,res) => {
    res.send(`<h1>Welcome to Guitar EMP Site</h1>`);
});
//port
const PORT = process.env.PORT || 8080;
//run listen
app.listen(PORT,()=>{
    console.log( `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
    .white);
});


