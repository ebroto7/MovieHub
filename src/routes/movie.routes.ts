import {Router} from 'express'
import { getAllMovies, 
         createMovie, 
         updateMovie, 
         deleteMovie, 
         getMovieById,
         getAllMoviesByUserId
        } from '../controllers/movie.controllers'

const movieRoutes = Router()

movieRoutes.get("/", getAllMovies)
movieRoutes.get("/:movieId", getMovieById)
movieRoutes.get("/user/:userId", getAllMoviesByUserId);

movieRoutes.post("/:userId", createMovie)

movieRoutes.patch("/:movieId", updateMovie)
movieRoutes.delete("/:movieId", deleteMovie)


export default movieRoutes