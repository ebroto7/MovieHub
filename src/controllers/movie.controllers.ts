import { Response, Request } from "express";
import MovieModel from '../model/movie.model'
import UserModel from "../model/user.model";
// import { tryCatchHandler } from "../utils/tryCatchHandler";
import GenreModel from "../model/genre.model";
import { prismaClient } from "../db/client";

export const getAllMovies = async (req: Request, res: Response) => {

    try {
        const movies = await prismaClient.movie.findMany()

        res.status(201).json(movies)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getMovieById = async (req: Request, res: Response) => {
    const { movieId } = req.params
    try {
        const movie = await prismaClient.movie.findUnique({
            where: { id: movieId }
        })

        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const createMovie = async (req: Request, res: Response) => {
    const { title, description, director, stars, genreId,
        year, poster, duration, rated, comments } = req.body
    const { userId } = req.params
    try {
        const newMovie = await prismaClient.movie.create({
            data: {
                title, description, year, director, stars, duration, rated, poster, comments,
                Genre: { connect: { id: genreId } },
                User: { connect: { id: userId } }
            }
        })
        res.status(201).json(newMovie)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params
    const { title, description, director, stars, genreId,
        year, poster, duration, rated, comments } = req.body

    try {
        const movie = await prismaClient.movie.update({
            where: { id: movieId },
            data: {
                title, description, director, stars, genreId,
                year, poster, duration, rated, comments
            }
        })
        res.status(201).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }

}
export const deleteMovie = async (req: Request, res: Response) => {
    const { movieId, title } = req.params

    try {
        await prismaClient.movie.delete({
            where: { id: movieId }
        })
        res.status(204).send("Movie deleted " + title)
    } catch (error) {
        res.status(500).json(error)
    }
}

