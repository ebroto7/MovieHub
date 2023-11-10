import {Router} from 'express'  
import { getAllUsers, 
         deleteUser, 
         createUser, 
         updateUser,
         getUserById,
         addMovieToUser
        } from '../controllers/user.controllers'
import { validateName } from "../middleware/validateName.middleware";


const userRoutes = Router()      

userRoutes.get("/", getAllUsers)
userRoutes.get("/:userId", getUserById)

userRoutes.patch("/:userId", updateUser)
userRoutes.put("/:userId", addMovieToUser)
userRoutes.delete("/:userId", deleteUser)
userRoutes.post("/", validateName, createUser)

export default userRoutes