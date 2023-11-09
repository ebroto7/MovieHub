import {Router} from 'express'
import { getAllMovies, 
         createMovie, 
         updateMovie, 
         deleteMovie, 
         getMovieById
        } from '../controllers/movie.controllers'

const movieRoutes = Router()

movieRoutes.get("/", getAllMovies)
movieRoutes.get("/:movieId", getMovieById)
movieRoutes.post("/", createMovie)
movieRoutes.patch("movieId", updateMovie)
movieRoutes.delete("movieId", deleteMovie)

export default movieRoutes