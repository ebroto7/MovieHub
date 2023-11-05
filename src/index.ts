import app from "./server";
import userRoutes from './routes/user.routes';

const PORT: 8080 = 8080

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})