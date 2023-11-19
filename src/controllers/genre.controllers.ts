import { Response, Request } from "express";
import GenreModel from "../model/genre.model";
import { prismaClient } from "../db/client";
import { convertToType } from "../utils/convertToType";


export const getAllGenres = async (req: Request, res: Response) => {
    try {
        const genres = await prismaClient.genre.findMany({
            include: {
                movies: true
            }
        })

        res.status(200).json(genres)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getGenreById = async (req: Request, res: Response) => {
    const { genreId } = req.params
    try {
        const genre = await prismaClient.genre.findUnique({
            where: { _id: convertToType(genreId) },
            include: {
                movies: true
            }
        })
        res.status(200).json(genre)
    } catch (error) {
        res.status(500).json( {error, message: "Can get genres"})
    }
}
export const createGenre = async (req: Request, res: Response) => {
    const { name } = req.body
    try {
        if (!name) throw new Error("missing fields")
        const newUser = await prismaClient.genre.create({ name })

        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateGenre = async (req: Request, res: Response) => {
    const { genreId } = req.params
    const { name, movies } = req.body
    try {
        const user = await prismaClient.genre.update({
         where: { _id: convertToType(genreId) },
         data:   { name: name, movies: movies },
    })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteGenre = async (req: Request, res: Response) => {
    const { genreId } = req.params

    try {
        await prismaClient.user.delete({
            where: { id: convertToType(genreId) }, 
        })
        res.status(204).send("Genre deleted")
    } catch (error) {
        res.status(500).json(error)

    }
}