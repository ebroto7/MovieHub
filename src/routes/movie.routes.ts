import {Router} from 'express'
import { getAllMovies, createMovie, updateMovie, deleteMovie } from '../controllers/movie.controllers'

const movieRoutes = Router()

movieRoutes.get("/", getAllMovies)
movieRoutes.post("/", createMovie)
movieRoutes.put("/", updateMovie)
movieRoutes.delete("/", deleteMovie)

export default movieRoutes