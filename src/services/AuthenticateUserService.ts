import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { secret } from '../../jwt.json'

interface IAuthenticateRequest{
    email: string,
    password: string
}

class AuthenticateUserService{

    async execute({email, password}: IAuthenticateRequest){
        
        const usersRepositories = getCustomRepository(UsersRepositories)

        const user = await usersRepositories.findOne({email})

        if(!user){
            throw new Error("Email/Password Incorrect")
        }
        
        const passMatch = await compare(password, user.password)

        if(!passMatch){
            throw new Error("Email/Password Incorrect")
        }


        const token = sign({
            email: user.email
        },secret,{
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }
}

export { AuthenticateUserService }