import { Response, Request } from "express";
import MovieModel from '../model/movie.model'

export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const movies = await MovieModel.find()
        res.status(201).json(movies)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getMovieById = async (req: Request, res: Response) => {
    const { movieId } = req.params
    try {
        const movie = await MovieModel.findById({ _id: movieId })
        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const createMovie = async (req: Request, res: Response) => {

    const { title, description, genre, year, duration, rated} = req.body
    try {
        if (!title || !description || !genre || !year || !duration || !rated) throw new Error("missing fields")
        const newMovie = await MovieModel.create( { title, description, genre, year, duration, rated} )
        res.status(201).json(newMovie)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const updateMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params
    const { title, description, director, stars, genre, 
            year, poster, duration, rated, comments } = req.body

    try {
        const movie = await MovieModel.findByIdAndUpdate(
            { _id: movieId },
            { $set: { title, description, director, stars, genre, 
                      year, poster, duration, rated, comments }},
            { new: true }
        )
        res.status(201).json(movie)
    } catch (error) {
        res.status(500).json(error)
    }

}
export const deleteMovie = async (req: Request, res: Response) => {
    const { movieId, title } = req.params

    // try {
    //     await MovieModel.findByIdAndDelete({_id: movieId })
    //     res.status(200).send("Movie deleted "+title)
    // } catch (error) {
    //     res.status(500).json(error)

    // }

    res.status(500).send("movie deleted ")

}

// interface IMovieDocument extends Document {
//     title: string,
//     description: string,

//     genre: string,
//     director?: string,
//     stars?: string[]
//     year: number,
//     poster?: string,
//     duration: number,

//     rated: number,

//     comments?: string[]

//     createdAt?: Date,
//     updatedAt?: Date
// }