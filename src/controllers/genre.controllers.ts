import { Response, Request } from "express";
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
            where: { id: convertToType(genreId) },
            include: {
                movies: true
            }
        })
        res.status(200).json(genre)
    } catch (error) {
        res.status(500).json( {error, message: "Can get this genre"})
    }
}
export const createGenre = async (req: Request, res: Response) => {
    const { name } = req.body

    try {
        const genre = await prismaClient.genre.create({ data: { name } })

        res.status(201).json(genre)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateGenre = async (req: Request, res: Response) => {
    const { genreId } = req.params
    const { name, movies } = req.body
    try {
        const user = await prismaClient.genre.update({
         where: { id: convertToType(genreId) },
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
        
        await prismaClient.genre.delete({
            where: { id: convertToType(genreId) }, 
        })
        res.status(204).json({message: "Genre deleted"})
    } catch (error) {
        res.status(500).json(error)

    }
}