import {Router} from 'express'
import { getAllGenres, createGenre, updateGenre, deleteGenre } from '../controllers/genre.controllers'

const genreRoutes = Router()

genreRoutes.get("/", getAllGenres)
genreRoutes.post("/", createGenre)
genreRoutes.put("/", updateGenre)
genreRoutes.delete("/", deleteGenre)

export default genreRoutes