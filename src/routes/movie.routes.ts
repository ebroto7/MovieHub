import {Router} from 'express'
import { getAllMovies, 
         createMovie, 
         updateMovie, 
         deleteMovie, 
         getMovieById,
         getAllMoviesByUserId,
         getMoviesByGenre
        } from '../controllers/movie.controllers'
import {jwtCheckMiddleware} from '../middleware/checkJwt.middleware'

const movieRoutes = Router()

movieRoutes.get("/", getAllMovies)
movieRoutes.get("/:movieId", getMovieById)
movieRoutes.get("/user/:userId", getAllMoviesByUserId);
movieRoutes.get("/genre/:genreId", getMoviesByGenre);

movieRoutes.post("/:userId", createMovie)

movieRoutes.patch("/:movieId", jwtCheckMiddleware, updateMovie)
movieRoutes.delete("/:movieId", jwtCheckMiddleware, deleteMovie)


export default movieRoutes