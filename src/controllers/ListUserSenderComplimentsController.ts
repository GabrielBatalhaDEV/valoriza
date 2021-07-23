import { Request, Response } from "express"
import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService"

class ListUserSenderComplimentsController{

    async handle(request: Request, response: Response){

        const listUserSenderComplimentsService = new ListUserSenderComplimentsService()

        const compliments = await listUserSenderComplimentsService.execute(request.user_id)

        return response.json(compliments)

    }
}


export { ListUserSenderComplimentsController }