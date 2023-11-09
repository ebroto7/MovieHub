import { Response, Request } from "express";

export const getAllMovies = (req: Request, res: Response) => {
    res.status(200).send("Get all Movie")
}
export const createMovie = (req: Request, res: Response) => {
    res.status(200).send("Movie created")
}
export const updateMovie = (req: Request, res: Response) => {
    res.status(200).send("Movie updated")
}
export const deleteMovie = (req: Request, res: Response) => {
    res.status(200).send("Movie deleted")
}