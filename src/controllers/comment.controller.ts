import { Response, Request } from "express";
import { prismaClient } from "../db/client";
import { convertToType } from "../utils/convertToType";


export const getAllComments = async (req: Request, res: Response) => {
    try {
        const comment = await prismaClient.comment.findMany()

        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getCommentById = async (req: Request, res: Response) => {
    const { commentId } = req.params
    try {
        const comment = await prismaClient.comment.findUnique({
            where: { id: convertToType(commentId) },
            include: {
                movies: true,
                user: true
            }
        })
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({ error, message: "Can get this comment" })
    }
}


export const getCommentsByMovieId = async (req: Request, res: Response) => {
    const { movieId } = req.params
    try {
        const comment = await prismaClient.comment.findMany({
            where: { movieId: convertToType(movieId) },
            include: {
                User: true
            }
        })
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({ error, message: "Can't get comments" })
    }
}


export const createComment = async (req: Request, res: Response) => {
    const { title, description, movieId, ratting } = req.body
    const { userId } = req.params
    try {

        if (!title) {
            return res.status(404).json({ message: "No title" });
        }
        if (!description) {
            return res.status(404).json({ message: "No description" });
        }

        if (!movieId) {
            return res.status(404).json({ message: "No movieId" });
        }

        if (!ratting) {
            return res.status(404).json({ message: "No ratting" });
        }
        if (!userId) {
            return res.status(404).json({ message: "No user" });
        }
        const newComment = await prismaClient.comment.create({
            data: {
                title, description, ratting,
                Movie: { connect: { id: convertToType(movieId) } },
                User: { connect: { id: convertToType(userId) } }
            }
        })
        res.status(201).json(newComment)
    } catch (error) {
        res.status(500).json(error)
    }
}

