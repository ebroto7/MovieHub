import {Router} from 'express'
import { getAllGenres, 
         createGenre, 
         updateGenre, 
         deleteGenre, 
         getGenreById 
        } from '../controllers/genre.controllers'

const genreRoutes = Router()

genreRoutes.get("/", getAllGenres)
genreRoutes.get("/:genreId", getGenreById)
genreRoutes.post("/", createGenre)
genreRoutes.patch("/:genreId", updateGenre)
genreRoutes.delete("/:genreId", deleteGenre)

export default genreRoutes
