import { Response, Request, NextFunction } from "express";
import UserModel from "../model/user.model";

export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const users = await UserModel.find()

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)

    }

    // res.status(200).send("get all users")
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params

    try {
        const user = await UserModel.findById({ _id: userId })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }

}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body
    try {
        if (!name || !email || !password) throw new Error("missing fields")
        const newUser = await UserModel.create({ name, email, password })

        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json(error)
    }

    
}

export const updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params
    const { name, email } = req.body
    try {
        const user = await UserModel.findByIdAndUpdate(
            { _id: userId },
            { $set: { name: name, email: email } },
            { new: true }
        )
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params

    try {
        await UserModel.findByIdAndDelete({_id: userId})
        res.status(200)
    } catch (error) {
        res.status(500).json(error)

    }
    // res.status(200).send("User deleted")
}