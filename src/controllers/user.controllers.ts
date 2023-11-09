import { Response, Request, NextFunction } from "express";
import UserModel from "../model/user.model";

export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const users = await UserModel.find()

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)

    }
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
    const { name, email, movies } = req.body
    try {
        const user = await UserModel.findByIdAndUpdate(
            { _id: userId },
            { $set: { name: name, email: email, movies: movies } },
            { new: true }
        )
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const addMovieToUser = async (req: Request, res: Response) => {
    res.status(500).send("added movie")
}

export const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params

    try {
        await UserModel.findByIdAndDelete({_id: userId})
        res.status(200).send("User deleted")
    } catch (error) {
        res.status(500).json(error)

    }
}