import { Router} from 'express'
import { postLogin } from '../controllers/userController'

 const userRouter = Router()

userRouter.post('/auth',postLogin)

 export default userRouter