import app from "./server";
import config from "./config/config";
import connect from "./db/connect";

const PORT = config.app.PORT

connect().then(() => {
    console.log('conected to database')

    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })
})


