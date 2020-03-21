import { Server } from "./server";


let server =new Server().app;
let port = 5000;
server.listen(port,()=>{
console.log('server is run');
});


// import *  as express from 'express';
// import *  as mongoose from 'mongoose';
// import { getEnviromentVariables } from './enviroment/env';

// let app: express.Application = express();

// app.listen(5000,()=>{
//  console.log("started");
// });

// app.use(function(req,res,next){
//     console.log('middelware');
//     next();
// });

// app.get('/login',(req:any,res,next)=>{
//     const data = [{name:'testusername'}]; 
//     req.user = data;
//     res.send(data);
//     next();
// },(req:any,res)=>  {
//     console.log('another middelware');
//     console.log(req.user);
// }
// );

// console.log(getEnviromentVariables().db_url);


// app.get('/result',(req,res)=>{
//     res.send('this is result rersonse');
// })