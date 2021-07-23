import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { secret } from '../../jwt.json'

interface IPayload{
    sub: string;
}

export function ensureAuthenticate(req: Request, res: Response, next: NextFunction){

    // Receber o token
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).end()
    }

    const [,token] = authToken.split(" ") 
 
    // Validar se token esta preenchido
    if(!token){
        return res.status(401).end()
    }

    // Validar se token é valido

    try {
        const {sub} = verify(token ,secret) as IPayload

        req.user_id = sub
        

        return next()
    } catch (error) {
        return res.status(401).end()
    }
    
    

}