import '@babel/polyfill';
const express=require('express');
const app=express();
const PORT=3000;
import {restRouter} from './api';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/innotym',{ useNewUrlParser: true ,  useUnifiedTopology: true , 'useCreateIndex': true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(cors());
app.use('/api',restRouter);
app.use((req,res,next)=>{
    const error=new Error("Not Found!!");
    error.status=404;
    error.message="Invalid Route!!";
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    return res.json({
        error:{
            message:error.message
        }
        
    })
})

app.use(function(req,res,next){
    console.log("Middleware before api call");
    next();
})

app.get('/',(req,res)=>{
    res.json({
        msg: 'API Running'
    })
})

app.get('/users',(req,res) => {
    res.json(users);
})

app.listen(PORT,() =>{
    console.log(`Server is running at port number ${PORT}`);
})