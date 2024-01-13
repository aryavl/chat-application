import { Router} from 'express'
import { getAllMessages, getAllUsers, getUser, postLogin } from '../controllers/userController'

 const userRouter = Router()

userRouter.post('/auth',postLogin)
userRouter.get('/users',getAllUsers)
userRouter.get('/user',getUser)
userRouter.get('/messages',getAllMessages)

 export default userRouter