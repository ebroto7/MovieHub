import {Router} from 'express'
import { getAllComments, 
         getCommentsByMovieId,
         getCommentById,
         createComment
        } from '../controllers/comment.controller'

const commentRoutes = Router()

commentRoutes.get("/", getAllComments)
commentRoutes.get("/:movieId", getCommentsByMovieId)
commentRoutes.get("/:commentId", getCommentById)

commentRoutes.post("/:userId", createComment)


export default commentRoutes
