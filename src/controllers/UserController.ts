import User from "../models/User";
import {validationResult} from 'express-validator';

export class UserController{

        static async signUp(req ,res ,next){
            console.log('in sign up');
            const error = validationResult(req);
            console.log('here 11');
            console.log(error);
            
            if(!error.isEmpty()){
                console.log('here 3');
                console.log(error.array()[0].msg);
                next(new Error(error.array()[0].msg));
                return ;

            }
            const email =req.body.email;
            const password = req.body.password;
            const username = req.body.username;
            const data = {
                    email: email,
                    password:password,
                    username:username
            }           
            // user.save().then((user)=>{
            //     res.send(user);
            // }).catch(err=>{
            //     next(err);
            // })

            try{
                let user = await new User(data).save();
                res.send(user);
            }catch(e){
                next(e);
            }
        }

    // static login(req,res,next){
    //     const email = req.body.email;
    //     const password =req.body.password;
    //     const user = new User({
    //         email:email,
    //         password:password
    //     });
    //     user.save().then((user)=>{
    //         res.send(user);
    //     }).catch(err=>{
    //         next(err);
    //     })
        
    // }

  
}