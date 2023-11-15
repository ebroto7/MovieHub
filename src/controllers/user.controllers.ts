import { Response, Request, NextFunction } from "express";
import UserModel from "../model/user.model";
import { IUserDocument } from "../model/user.model";
import { prismaClient } from "../db/client"

export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const allUsers = await prismaClient.user.findMany({
            include: {
                movies: true
            }
        })
        res.status(200).json(allUsers)

    } catch (error) {
        res.status(500).json(error)
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params

    try {
        const allUsers = await prismaClient.user.findUnique({
            where: { id: userId },
            include: {
                movies: true
            }
        })
        res.status(200).json(allUsers)

    } catch (error) {
        res.status(500).json(error)
    }

}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body

    try {
        const newUser = await prismaClient.user.create({
            data: { name, email, password }
        })
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params
    const { name, email, movies } = req.body

    try {
        const user = await prismaClient.user.update({
            where: { id: userId },
            data: { name, email, movies }
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params

    try {
        await prismaClient.user.delete({
            where: { id: userId }
        })
        res.status(204).send("user deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}


const tryCatchHandler = (req: Request, res: Response, succesStatus: number, getData: IUserDocument | IUserDocument[] | null) => {
    try {
        const data = getData
        res.status(succesStatus).json(data)

    } catch (error) {
        res.status(500).json(error)
    }
}