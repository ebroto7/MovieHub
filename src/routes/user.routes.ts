import {Router, Request, Response} from 'express'  
import { getAllUsers, 
         deleteUser, 
         createUser, 
         updateUser,
         getUserById
        } from '../controllers/user.controllers'


const userRoutes = Router()      

userRoutes.get("/", getAllUsers)
userRoutes.get("/:userId", getUserById)

userRoutes.patch("/:userId", updateUser)
userRoutes.delete("/:userId", deleteUser)
userRoutes.post("/", createUser)

export default userRoutes