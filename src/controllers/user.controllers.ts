import { Response, Request } from "express";

// ejemplos de función
export const getAllUsers = (req: Request, res: Response) => {
    res.status(200).send("Get all users")
}
export const createUser = (req: Request, res: Response) => {
    res.status(200).send("user created")
}
export const updateUser = (req: Request, res: Response) => {
    res.status(200).send("User updated")
}
export const deleteUser = (req: Request, res: Response) => {
    res.status(200).send("User deleted")
}