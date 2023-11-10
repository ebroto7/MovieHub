import { Response, Request, NextFunction } from "express";
import { IUserDocument } from "../model/user.model";
import { IMovieDocument } from "../model/movie.model";
import { IGenreDocument } from "../model/genre.model";

type ModelDocuments = IUserDocument | IUserDocument[] | IMovieDocument | IMovieDocument[] | IGenreDocument | IGenreDocument[] 

export const tryCatchHandler = (req: Request, res: Response, succesStatus: number , getData: ModelDocuments | null ) => {
   
    try {
        const data = getData
        res.status(succesStatus).json(data)

    } catch (error) {
        res.status(500).json(error)
    }
}