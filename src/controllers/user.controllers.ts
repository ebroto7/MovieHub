import { Response, Request, NextFunction } from "express";
import { prismaClient } from "../db/client"
import { convertToType } from "../utils/convertToType";

export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const allUsers = await prismaClient.user.findMany({
            include: {
                movies: true,
                comments: true
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
        const user = await prismaClient.user.findUnique({
            where: { id: convertToType(userId) },
            include: {
                movies: true,
                comments: true
            }
        })
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json(error)
    }

}

export const createUserOrLogin = async (req: Request, res: Response) => {
    const { name, email } = req.body;

    try {

        if (!name || !email) {
            throw new Error("Missing fields");
        }
        const existingUser = await prismaClient.user.findUnique({
            where: {
                email,
            },
        });
        if (existingUser) {
            res.status(409).json(existingUser);
        } else {
            const newUser = await prismaClient.user.create({
                data: { name, email },
            });

            res.status(201).json(newUser);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

// export const createUser = async (req: Request, res: Response, next: NextFunction) => {
//     const { name, email, password } = req.body

//     try {
//         const newUser = await prismaClient.user.create({
//             data: { name, email, password }
//         })
//         res.status(201).json(newUser)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }

export const updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params
    const { name, email, movies } = req.body

    try {
        const user = await prismaClient.user.update({
            where: { id: convertToType(userId) },
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
            where: { id: convertToType(userId) },
        })
        res.status(204).json({ mesage: "User succesfully deleted" })
    } catch (error) {
        res.status(500).json(error)
    }
}

