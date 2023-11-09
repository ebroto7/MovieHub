import {Router, Request, Response} from 'express'  
import { getAllUsers, 
         deleteUser, 
         createUser, 
         updateUser,
         getUserById,
         addMovieToUser
        } from '../controllers/user.controllers'


const userRoutes = Router()      

userRoutes.get("/", getAllUsers)
userRoutes.get("/:userId", getUserById)

userRoutes.patch("/:userId", updateUser)
userRoutes.put("/:userId", addMovieToUser)
userRoutes.delete("/:userId", deleteUser)
userRoutes.post("/", createUser)

export default userRoutes