import express, {Request, Response, NextFunction } from 'express';
import "express-async-errors"
//devem estar juntos ^^

import 'reflect-metadata';
import './database';
import {router} from "./routes"


const app = express();

app.use(express.json())

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
     if(err instanceof Error){
          return response.status(400).json({
               error: err.message
          })
     }

     return response.status(500).json({
          status: "error",
          message: "Internal Server Error"
     })
})

const port = 3000 

app.listen(port, () => console.log({
     port
    }))