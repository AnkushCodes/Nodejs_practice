import {body} from 'express-validator';
import User from '../models/User';

export class UserValidators{


    static signUp(){
        console.log('in validator')
        return [           
            body('email','Email is required').isEmail().custom((email,{req})=>{
            return User.findOne({email:email}).then(user=>{
                console.log(req.body);
                    if(user){
                        console.log('here 1');
                        throw new Error('User already Exist');
                    }else{
                        console.log('here 2');
                        return true;
                    }
                })
            }),
            body('password','Password is required').isAlphanumeric().isLength({min:8,max:20}).withMessage('Password can be from 8 to 20 only'),
            body('username','User name is required').isString()
        ]
        
    }
    // static login (){
    //     return [
    //         body('username','Username is required').toString(),
    //         body('email','Email is required').isEmail()
    //     ]
    // }

}