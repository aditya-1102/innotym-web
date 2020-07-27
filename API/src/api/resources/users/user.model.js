import mongoose from 'mongoose';
const Schema=mongoose.Schema;
const empSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    amount:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
});
export default new mongoose.model('User',empSchema,'users');