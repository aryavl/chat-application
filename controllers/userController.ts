import { Request, Response, response } from "express";
import { User } from "../model/userModal";
import jwt from 'jsonwebtoken'

export const postLogin = async (request: Request, response: Response) => {
  try {
    console.log(await request.body);
    const { name, email, imageId } = await request.body;
    // const user =new User(await request.body)
    const user = new User({
      name,
      email,
      imageId,
    });
    await user.save();
    const accessToken = jwt.sign(
      user.toObject(),
      process.env.ACCESS_TOKEN_SECRET!
    )
    console.log(accessToken);
    console.log(user);
   
    
    
    response.send({user,accessToken});
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getAllUsers =async (request:Request,response:Response) => {
    try {
        const users = await User.find({})
        response.send(users)
    } catch (error:any) {
        console.log(error.message);
        
    }
    
}
export const getUser =async (request:Request,response:Response) => {
    try {
 

      const url =new URL(request.url!)
      console.log(url);
      
      const searchparams = url.searchParams
      const email = searchparams.get('email')
      // const  email  = request.params;
      console.log(email,"email");
      
      // not working
        const users = await User.find({})
        response.send(users)
    } catch (error:any) {
        console.log(error.message);
        
    }
    
}

export const getAllMessages = async(request:Request,response:Response) =>{
  try {
    const { sender, receiver}=request.query
    console.log(sender,receiver);
    const user = await User.findOne({email:receiver})
    const filteredUser = user?.messages?.filter((message:any)=>message.sender === sender && message.receiver === receiver || message.sender === receiver && message.receiver === sender)
    response.send(filteredUser)
    
  } catch (error:any) {
    console.error(error.message);
    
  }
}
