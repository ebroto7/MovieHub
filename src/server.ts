import express from 'express';
import userRoutes from './routes/user.routes';
import movieRoutes from './routes/movie.routes';
import genreRoutes from './routes/genre.routes';

const app = express()
app.use(express.json())


app.use("/user", userRoutes)
app.use("/movie", movieRoutes)
app.use("/genre", genreRoutes)


export default app