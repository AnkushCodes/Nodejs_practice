import * as express from 'express';
import { getEnviromentVariables } from './enviroment/env';
import *  as mongoose from 'mongoose';
import UserRouter from './enviroment/routers/UserRouter';
import bodyParser = require('body-parser');

export class Server {
public app: express.Application =express();

constructor(){
    this.setConfiguration();
    this.configureBodyParser();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
}

setConfiguration(){
this.setMongodb();
}

setMongodb(){
    console.log('mongo db ');
    const databaseUrl = getEnviromentVariables().db_url;
    mongoose.connect(databaseUrl,
    {useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('mongo db is connected');
    });
}

setRoutes(){
    this.app.use('/api/user',UserRouter);
}

error404Handler(){
    this.app.use((req,res)=>{
       res.status(404).json({
           message:"Not Found",
           status_code:404
       }); 
    });
}

configureBodyParser(){
    this.app.use(bodyParser.urlencoded({extended:true}));
}

handleErrors(){
    this.app.use((error,req,res,next)=>{
        const errorStatus =  req.errorStatus || 500;
        res.status(errorStatus).json({
            message:error.message || 'something went wrong. Please Try Again',
            status_code: errorStatus
        })
    })
}

}