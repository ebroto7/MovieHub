import { Response, Request } from "express";


export const getAllGenres = (req: Request, res: Response) => {
    res.status(200).send("Get all genre")
}
export const createGenre = (req: Request, res: Response) => {
    res.status(200).send("Genre created")
}
export const updateGenre = (req: Request, res: Response) => {
    res.status(200).send("Genre updated")
}
export const deleteGenre = (req: Request, res: Response) => {
    res.status(200).send("Genre delete")
}