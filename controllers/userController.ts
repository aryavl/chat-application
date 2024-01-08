import {Request,Response, response} from 'express'
import { User } from '../model/userModal';

export const postLogin =async (request:Request,resonse:Response) => {
    try {
        const user =new User(request.body)
        await user.save()
        response.send(user)
    } catch (error:any) {
        console.log(error.message);
        
    }
}