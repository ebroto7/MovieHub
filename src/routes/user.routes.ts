import {Router} from 'express'  
import { getAllUsers, 
         deleteUser, 
         createUser, 
         updateUser,
         getUserById,
        } from '../controllers/user.controllers'
import { validateName } from "../middleware/validateName.middleware";


const userRoutes = Router()      

userRoutes.get("/", getAllUsers)
userRoutes.get("/:userId", getUserById)

userRoutes.patch("/:userId", updateUser)
userRoutes.delete("/:userId", deleteUser)
userRoutes.post("/", validateName, createUser)

export default userRoutes