import express from 'express';
import userRoutes from './routes/user.routes';
import config from './config/config';

const app = express()
app.use(express.json())

const PORT = config.app.PORT

app.use("/user", userRoutes)


export default app