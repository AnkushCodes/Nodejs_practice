import * as mongooes from 'mongoose';
import {model} from 'mongoose';


const userSchema = new mongooes.Schema({
    email:{type:String,required:true},
    password:{type:String ,required:true},
    username:{type:String ,required:true},
    verified:{type:Boolean,required:true,default:false},
    verification_token:{type:Number,required:true},
    verification_token_time:{type:Date,required:true},
    created_at:{type:Date,required:true,default:new Date()},
    updated_at:{type:Date,reqired:true,default:new Date()}
});

export default model('users',userSchema);