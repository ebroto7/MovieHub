import {Router, Request, Response} from 'express'  
import { getAllUsers, deleteUser, createUser, updateUser } from '../controllers/user.controllers'


const userRoutes = Router()      

userRoutes.get("/", getAllUsers)
userRoutes.put("/", updateUser)
userRoutes.delete("/", deleteUser)
userRoutes.post("/", createUser)

export default userRoutes